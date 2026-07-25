import ServiceCard from "@/components/ServiceCard";
import { allService } from "@/lib/api/lawyer/data";
import { Pagination, Table } from "@heroui/react";
import Link from "next/link";

const BrowseLawyers = async ({ searchParams }) => {
    const sparams = await searchParams;

    const category = sparams.category || "";
    const search = sparams.search || "";
    const page = sparams.page || 1;
    const limit = sparams.limit || 5;

    const params = new URLSearchParams();
    if (category) {
        params.set("category", category);
    }
    if (search) {
        params.set("search", search);
    }
    if (page) {
        params.set("page", page);
    }
    if (limit) {
        params.set("limit", limit);
    }

    const allLawyers = await allService(params);
    const { skip, total_data, data, total_page } = allLawyers;

    const pages = [];
    for (let i = 1; i <= total_page; i++) {
        pages.push(i);
    }
    console.log(pages);

    return (
        <>
            <div>
                <section className="relative overflow-hidden bordepy-16 shadow-sm lg:px-12">
                    {/* Background Blur */}
                    <div className="absolute -top-20 -right-20 h-64 w-64  bg-indigo-200/30 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-200/20 blur-3xl" />

                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                        <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
                            ⚖️ Trusted Legal Solutions
                        </span>

                        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-purple-500 md:text-5xl">
                            Browse Professional
                            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                                {" "}
                                Legal Services
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                            Find experienced lawyers offering specialized legal
                            services for individuals, families, and businesses.
                            Filter by practice area and connect with trusted
                            professionals ready to help.
                        </p>
                    </div>
                    <div className="">
                        <ServiceCard data={data}></ServiceCard>
                    </div>
                </section>
                <Table.Footer>
                    <Pagination size="sm">
                        <Pagination.Summary></Pagination.Summary>
                        <Pagination.Content className="text-center">
                            <Pagination.Item>
                                <Pagination.Previous isDisabled={page == 1}>
                                    <Link className="flex items-center"
                                        href={`/browse-lawyers?page=${Number(page) - 1}`}
                                    >
                                        <Pagination.PreviousIcon />
                                        Prev
                                    </Link>
                                </Pagination.Previous>
                            </Pagination.Item>
                            {pages.map((p) => (
                                <Link
                                    key={p}
                                    href={`/browse-lawyers?page=${p}`}
                                >
                                    <Pagination.Item>
                                        <Pagination.Link
                                            isActive={p === Number(page)}
                                            className={`${p === Number(page) && "bg-red-400 text-white"}`}
                                        >
                                            {p}
                                        </Pagination.Link>
                                    </Pagination.Item>
                                </Link>
                            ))}
                            <Pagination.Item>
                                <Pagination.Next
                                    isDisabled={page == total_page}
                                >
                                    <Link
                                        href={`/browse-lawyers?page=${Number(page) + 1}`}
                                        className="flex items-center"
                                    >
                                        Next
                                        <Pagination.NextIcon  />
                                    </Link>
                                </Pagination.Next>
                            </Pagination.Item>
                        </Pagination.Content>
                    </Pagination>
                </Table.Footer>
            </div>
        </>
    );
};

export default BrowseLawyers;
