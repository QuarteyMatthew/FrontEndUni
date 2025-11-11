"use client";
import MyHeader from '@/app/components/Assets/MyHeader';
import MyFooter from '@/app/components/Assets/MyFooter';
import BodySignIn from '@/app/bodys/bodysignin';

export default function SignInPage() {
  return (
    <div className="" style={{fontFamily : "var(--font-geist-mono)"}}>
      <MyHeader />
      <BodySignIn />
      <MyFooter />
    </div>
  );
}
