import Main from "./main";
import Header from "./components/header";
import { ConceptType } from "./types/concept";
import { getRandomConcept } from "@/app/constants/concepts";

export default async function Home() {
  // API 라우트를 거치지 않고 직접 함수 호출
  const concept = getRandomConcept();

  return (
    <main className="flex h-[100dvh] w-full max-w-3xl flex-col items-center pt-36 md:pt-24">
      {concept ? (
        <>
          <Header concept={concept} />
          <Main concept={concept} />
        </>
      ) : (
        <div>Something Went Wrong...</div>
      )}
    </main>
  );
}
