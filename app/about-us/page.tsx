import { Metadata } from 'next';
import AboutUs from './about-us';

export const metadata: Metadata = {
  title: 'About Us | Scope Seeker',
  description: 'Generated by create next app',
};

export default function Page() {
  return <AboutUs />;
}
