import { useAuth } from 'hooks';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <h1 style={{ textAlign: 'center', fontFamily: 'Ubuntu' }}>
      Welcome to your Phonebook.
      {!isLoggedIn && <p>Please login or register</p>}
    </h1>
  );
}
