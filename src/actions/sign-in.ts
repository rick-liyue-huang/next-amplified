'use server';

import { signIn, type SignInInput } from 'aws-amplify/auth';

import { Amplify } from 'aws-amplify';
import awsExports from '@/aws-exports';

Amplify.configure(awsExports);

export async function handleSignIn({ username, password }: SignInInput) {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });
  } catch (error) {
    console.log('error signing in', error);
  }
}
