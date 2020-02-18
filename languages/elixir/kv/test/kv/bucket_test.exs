defmodule KV.BucketTest do
  use ExUnit.Case, async: true

  setup do
    bucket = start_supervised!(KV.Bucket)

    %{bucket: bucket}
  end

  test "the stores default value is nil", %{bucket: bucket} do
    assert KV.Bucket.get(bucket, "eggs") == nil
  end

  test "it stores values by key", %{bucket: bucket} do
    KV.Bucket.put(bucket, "eggs", 3)

    assert KV.Bucket.get(bucket, "eggs") == 3
  end

  test "it deletes values by key", %{bucket: bucket} do
    KV.Bucket.put(bucket, "eggs", 3)

    assert KV.Bucket.delete(bucket, "eggs") == 3
    assert KV.Bucket.get(bucket, "eggs") == nil
  end

  test "are temparary" do
    #TODO research child_spec
    assert Supervisor.child_spec(KV.Bucket, []).restart == :temporary
  end
end
