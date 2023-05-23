import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import WishItem from "@/components/WishItem";
import { useSelector } from "react-redux";


const Wish = () => {
    const { wishItems } = useSelector((state) => state.wish);
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {wishItems.length > 0 && (
                <>
                        {/* HEADING AND PARAGRAPH START */}
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                Wishlist
                            </div>
                        </div>
                        {/* HEADING AND PARAGRAPH END */}

                        {/* WISH CONTENT START */}
                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            {/* WISH ITEMS START */}
                            <div className="flex-[2]">
                                <div className="text-lg font-bold">
                                    Wish Items
                                </div>
                                {wishItems.map((item) => (
                                    <WishItem key={item.id} data={item} />
                                ))}
                            </div>
                            {/* WISH ITEMS END */}

                            {/* SUMMARY START */}
                            <div className="flex-[1]">
                                <div className="text-lg font-bold">Summary</div>

                                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                                    <div className="flex justify-between">
                                        <div className="uppercase text-md md:text-lg font-medium text-black">
                                            Wishlist products
                                        </div>
                                        <div className="text-md md:text-lg font-medium text-black">
                                           
                                        </div>
                                    </div>
                                    <div className="text-sm md:text-md py-5 border-t mt-5">
                                        These are the items you have wishlisted, proceed and add these items to the cart and proceed with the checkout.
                                    </div>
                                </div>
                            </div>
                            {/* SUMMARY END */}
                        </div>
                        {/* CART CONTENT END */}
                </>
                )}

                {/* This is empty screen */}
                    { wishItems.length < 1 && (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <Image
                            src="/empty-cart.jpg"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        />
                        <span className="text-xl font-bold">
                            Your Wishlist is empty
                        </span>
                        <span className="text-center mt-4">
                            Looks like you have not added anything in your wislist.
                            <br />
                            Go ahead and explore top categories.
                        </span>
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                    )}
            </Wrapper>
        </div>
    );
};

export default Wish;