'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { api } from '@/trpc/react';

const formSchema = z.object({
  name: z.string().min(1, 'Post title is required'),
});

type FormValues = z.infer<typeof formSchema>;

export function LatestPost() {
  const [latestPost] = api.post.getLatest.useSuspenseQuery();

  const utils = api.useUtils();
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
      form.reset();
    },
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = (values: FormValues) => {
    createPost.mutate({ name: values.name });
  };

  return (
    <Fragment>
      {latestPost ? (
        <div>
          <h3 className="text-base font-medium">Your most recent post</h3>
          <p className="text-xs text-muted-foreground">/api/trpc/post.getLatest</p>
          <p className="text-sm border-l border-muted-foreground pl-2 italic">{latestPost.name}</p>
        </div>
      ) : (
        <p className="font-medium">You have no posts yet.</p>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="gap-0">
                <Label className="text-xs" htmlFor="name">
                  Post title
                </Label>
                <FormControl>
                  <Input id="name" placeholder="Title" className="bg-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-fit" type="submit" disabled={createPost.isPending}>
            {createPost.isPending ? 'Submitting...' : 'Add post'}
          </Button>
        </form>
      </Form>
    </Fragment>
  );
}
