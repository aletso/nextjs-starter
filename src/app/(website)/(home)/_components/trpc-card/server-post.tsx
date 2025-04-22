import { getServerSession } from '@/server/auth/utils';
import { api } from '@/trpc/server';

export async function ServerLatestPost() {
  const session = await getServerSession();

  if (!session?.user) {
    return (
      <div className="w-full max-w-xs text-sm pl-2 border-l border-muted-foreground">
        You need to be signed in to see posts.
      </div>
    );
  }

  // Fetch directly on the server
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs text-sm pl-2 border-l border-muted-foreground">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
    </div>
  );
}
