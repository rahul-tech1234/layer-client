// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const categories = [
//   "All",
//   "Criminal",
//   "Corporate",
//   "Family",
//   "Civil",
//   "Property",
//   "Tax",
//   "Business",
//   "Immigration",
// ];

// export default function CategoryFilter() {
//   const [category, setCategory] = useState("All");
//   const router = useRouter();

//   const handleFilter = (e) => {
//     e.preventDefault();

//     if (category === "All") {
//       router.push("/browse-lawyers");
//     } else {
//       router.push(`/browse-lawyers?category=${category}`);
//     }
//   };

//   return (
//     <section className="py-10">
//       <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
//         <h2 className="mb-6 text-center text-3xl font-bold">
//           Find Lawyers by Category
//         </h2>

//         <form
//           onSubmit={handleFilter}
//           className="flex flex-col gap-4 md:flex-row"
//         >
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
//           >
//             {categories.map((item) => (
//               <option key={item} value={item}>
//                 {item}
//               </option>
//             ))}
//           </select>

//           <button
//             type="submit"
//             className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
//           >
//             Browse
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const categories = [
    "All",
    "Criminal",
    "Corporate",
    "Family",
    "Civil",
    "Property",
    "Tax",
    "Business",
    "Immigration",
];

export default function FilterCat() {
    const [category, setCategory] = useState("All");
    const router = useRouter();

    const handleFilter = (e) => {
        e.preventDefault();

        if (category === "All") {
            router.push("/browse-lawyers");
        } else {
            router.push(`/browse-lawyers?category=${category}`);
        }
    };

    return (
        <section className="py-10">
            <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-center text-3xl font-bold">
                    Find Lawyers by Category
                </h2>

                <form
                    onSubmit={handleFilter}
                    className="flex flex-col gap-4 md:flex-row"
                >
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    >
                        {categories.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>

                    <button
                        type="submit"
                        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Browse
                    </button>
                </form>
            </div>
        </section>
    );
}
