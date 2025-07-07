'use server';

import { auth } from '@/lib/auth';
import { db } from '@/db/drizzle';
import { user } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { headers } from 'next/headers';

export const signIn = async () => {
  await auth.api.signInEmail({
    body: {
      email: 'test@test.com',
      password: 'password123',
    },
  });
};

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: 'test@test.com',
      password: 'password123',
      name: 'Reinier',
    },
  });
};

export const getUserProfile = async () => {
  try {
    const headersList = await headers();
    const session = await auth.api.getSession({
      headers: headersList,
    });

    if (!session) {
      throw new Error('No session found');
    }

    const userData = await db
      .select()
      .from(user)
      .where(eq(user.id, session.user.id))
      .limit(1);

    if (!userData.length) {
      throw new Error('User not found');
    }

    return userData[0];
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw new Error('Failed to fetch user profile');
  }
};

export const updateUserProfile = async (profileData: {
  firstName?: string;
  lastName?: string;
  phone?: string;
  bio?: string;
  role?: string;
  location?: string;
  country?: string;
  cityState?: string;
  postalCode?: string;
  taxId?: string;
}) => {
  try {
    const headersList = await headers();
    const session = await auth.api.getSession({
      headers: headersList,
    });

    if (!session) {
      throw new Error('No session found');
    }

    const updatedUser = await db
      .update(user)
      .set({
        ...profileData,
        updatedAt: new Date(),
      })
      .where(eq(user.id, session.user.id))
      .returning();

    return updatedUser[0];
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw new Error('Failed to update user profile');
  }
};
