import React from 'react';
import Head from "next/head";
import Header from "./Header";
import Banner from "./Banner"
import ProductFeed from "./ProductFeed";

export default function Home({products}) {
  return (
    <div className="bg-grey-100">
      <Head>
        <title>Amazon By Shreyas</title>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products} />

      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products")
  .then(
    (res) => res.json()
    );

    return{ props: {
      products: products,
     }
   }
}

// GET >>> https://fakestoreapi.com/products