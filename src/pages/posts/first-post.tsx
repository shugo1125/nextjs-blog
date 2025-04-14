import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./first-post.module.css";

const FirstPost: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>Hello,first post!</h1>
      <Link href="../">戻る</Link>

      <Image src="/sakura.jpeg" alt="sakura" width={100} height={100} />
    </>
  );
};

export default FirstPost;
