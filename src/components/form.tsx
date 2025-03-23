"use client";

interface WaitListFormProps {
  button: "default" | "secondary";
}

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@workspace/ui/lib/utils";
import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { Loader } from "lucide-react";
import { toast } from "@workspace/ui/lib/use-toast";
import { addToWaitingList } from "@/actions/waitlist";
import Link from "next/link";

const FormSchema = z.object({
  email: z.string().email(),
});

type FormSchema = z.infer<typeof FormSchema>;

export function WaitListForm({ button = "default" }: WaitListFormProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: FormSchema) {
    try {
      const response = await addToWaitingList(values);

      if (!response) {
        toast({
          title: "Uh oh",
          description: (
            <>
              We ran into a problem adding yoyr mail to the waitlist, please try
              again later or contact{" "}
              <Link href='mailto:hello@trendibble.com' className='font-medium'>
                The trendibble Team
              </Link>
              .
            </>
          ),
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Congrats",
        description:
          "You've been added to the mailing list, you'll get a mail from us soon.",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Oops",
        description: "Request could not be completed something went wrong.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='flex flex-col md:flex-row gap-4 pt-4 md:space-y-0'>
              <FormControl>
                <Input
                  placeholder='Enter your email address'
                  className='rounded-full bg-white/10 ring-white/40 ring-offset-transparent border-none text-white placeholder:text-white/60'
                  {...field}
                />
              </FormControl>

              <Button
                variant='secondary'
                className={cn("flex gap-2", {
                  "text-brand-purple-500": button === "default",
                  "bg-brand-purple-500 border-transparent ring-transparent text-white":
                    button === "secondary",
                })}
              >
                {form.formState.isSubmitting && (
                  <Loader className='animate-spin' />
                )}
                <span>Get early access</span>
              </Button>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
