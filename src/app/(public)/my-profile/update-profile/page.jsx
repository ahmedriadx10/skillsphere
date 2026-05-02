import ProfileUpdate from '@/components/ProfileUpdate';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const UpdateProfilePage = async() => {
  
  const session=await auth.api.getSession({
    headers:await headers()
  })

const user=session?.user
  
  return (
    <div>
<ProfileUpdate user={user}/>      
    </div>
  );
};

export default UpdateProfilePage;