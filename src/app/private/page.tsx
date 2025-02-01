import { createClient } from '../../../utils/supabase/server'

export default async function PrivatePage() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()
  
  // If no user, return null (component won't render anything)
  if (!data?.user) {
    return null;
  }

  // If user exists, show their email
  return (
    <p className="mt-1 text-md font-bold text-gray-800">
      Welcome {data.user.email}
    </p>
  )
}