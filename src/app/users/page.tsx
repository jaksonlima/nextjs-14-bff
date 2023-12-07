import { Button } from "@/components/Button";

interface Users {
  id: string;
  name: string;
}

async function getUsers(): Promise<Users[]> {
  console.log("COMPONENT GET");

  const response = await fetch("http://localhost:3000/api/users", {
    next: {
      revalidate: 10,
    },
  });

  return await response.json();
}

async function Page() {
  const users = await getUsers();

  async function action(data: any) {
    "use server";
    console.log("aqui action", { data });
  }

  return (
    <>
      <Button />
      <form action={action}>
        <input type="text" />
        <button type="submit">ok</button>
      </form>
      <ul>
        {users.map((user) => (
          <>
            <li key={user.id}>
              {user.id}° {user.name}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default Page;
