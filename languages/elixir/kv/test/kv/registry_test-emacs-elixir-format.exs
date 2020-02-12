defmodule KV.RegistryTest do
  use ExUnit.Case, async: true

  setup do
    registry = start_supervised!(KV.Registry)
    %{registry: registry}
  end

  test "create a bucket", %{registry: registry} do
    assert KV.Registry.lookup(registry, "cart") == :error
    assert KV.Registry.create(registry, "cart") == :ok
    assert {:ok, bucket} = KV.Registry.lookup(registry, "cart")
  end

  test "add item to bucket via registry", %{registry: registry} do
    KV.Registry.create(registry, "cart")
    {:ok, bucket} = KV.Registry.lookup(registry, "cart")

    KV.Bucket.put(bucket, "eggs", 3)
    assert KV.Bucket.get(bucket, "eggs") == 3
  end
end
