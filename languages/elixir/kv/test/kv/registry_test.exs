defmodule KV.RegistryTest do
  use ExUnit.Case, async: true

  setup context do
    _ = start_supervised!({KV.Registry, name: context.test})
    %{registry: context.test}
  end

  test "create a bucket", %{registry: registry} do
    assert KV.Registry.lookup(registry, "cart") == :error

    KV.Registry.create(registry, "cart")
    assert {:ok, bucket} = KV.Registry.lookup(registry, "cart")
  end

  test "add item to bucket via registry", %{registry: registry} do
    KV.Registry.create(registry, "cart")
    {:ok, bucket} = KV.Registry.lookup(registry, "cart")

    KV.Bucket.put(bucket, "eggs", 3)
    assert KV.Bucket.get(bucket, "eggs") == 3
  end

  test "removes bckets on exit", %{registry: registry} do
    KV.Registry.create(registry, "cart")
    {:ok, bucket} = KV.Registry.lookup(registry, "cart")
    Agent.stop(bucket)

    # removing the bucket is asynchronous. need to run a synchronous method to ensure bucket
    # deletion has been process
    _ = KV.Registry.create(registry, "just to flush")
    assert KV.Registry.lookup(registry, "cart") == :error
  end

  test "removes bucket on crash", %{registry: registry} do
    KV.Registry.create(registry, "cart")
    {:ok, bucket} = KV.Registry.lookup(registry, "cart")

    #Stop the bucket with non-normal reason
    Agent.stop(bucket, :shutdown)
    _ = KV.Registry.create(registry, "just to flush")
    assert KV.Registry.lookup(registry, "cart") == :error
  end

  test "bucket can crash at any time", %{registry: registry} do
    KV.Registry.create(registry, "shopping")
    {:ok, bucket} = KV.Registry.lookup(registry, "shopping")

    #Simulate a bucket crash by explicitly and synchronously shutting it down
    Agent.stop(bucket, :shutdown)

    # Now trying to call the dead process causes a :noproc exit
    catch_exit KV.Bucket.put(bucket, "milk", 3)
  end
end
