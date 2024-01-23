'use server';

import { confirmSignUp, type ConfirmSignUpInput } from 'aws-amplify/auth';

import { Amplify } from 'aws-amplify';
import awsExports from '@/aws-exports';

Amplify.configure(awsExports);

export async function handleSignUpConfirmation({
  username,
  confirmationCode,
}: ConfirmSignUpInput) {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username,
      confirmationCode,
    });
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}
