defmodule KV.Bucket do
  use Agent, restart: :temporary

  @doc """
      Sets up an agent for each test
  """
  def start_link(_opts) do
    Agent.start_link(fn -> %{} end)
  end

  @doc """
      Gets value from bucket by key
  """
  def get(bucket, key) do
    Agent.get(bucket, &Map.get(&1, key))
  end

  @doc """
  Puts value in bucket with key and value
  """
  def put(bucket, key, value) do
    Agent.update(bucket, &Map.put(&1, key, value))
  end

  @doc """
   Deletes value from store, returns value removed
  """
  def delete(bucket, key) do
    Agent.get_and_update(bucket, &Map.pop(&1, key))
  end
end
