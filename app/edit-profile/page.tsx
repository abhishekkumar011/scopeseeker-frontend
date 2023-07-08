import { Metadata } from 'next';
import EditProfile from './edit-profile';

export const metadata: Metadata = {
  title: 'Edit Profile | Scope Seeker',
  description: 'Generated by create next app',
};

export default function Page() {
  return <EditProfile />;
}
