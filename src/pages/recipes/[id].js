import { useRouter } from "next/router";

export default function RecipeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>{id}</p>
    </div>
  );
}
