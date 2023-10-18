import Link from "next/link";

const ReviewPage = () => {
  return (
    <>
      <h1>Review</h1>
      <nav>
        <ul>
          <li>
            <Link href="/reviews/hollow-knight">Hollow Knight</Link>
          </li>
          <li>
            <Link href="/reviews/stardew-valley">Stardew Valley</Link>
          </li>
        </ul>
      </nav>
      <p>Here we will list the reviews.</p>
    </>
  );
};

export default ReviewPage;
