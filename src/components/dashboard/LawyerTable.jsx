"use client";

import React from "react";
import { Table, Chip, Avatar, Button } from "@heroui/react";

import { FiEye, FiPlus } from "react-icons/fi";
import { Delete } from "./Delete";

import { EditModal } from "./EditModal";
import { HiOutlineBriefcase } from "react-icons/hi";
import Link from "next/link";

export default function LawyerTable({ manageData }) {
    return (
        <>
            {/* Table */}
            {manageData.length === 0 ? (
                <>
                    <div className="flex min-h-[70vh] items-center justify-center px-6">
                        <div className="w-full max-w-2xl rounded-3xl border border-default-200 bg-content1 p-10 text-center shadow-sm">
                            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                                <HiOutlineBriefcase className="text-5xl text-primary" />
                            </div>

                            <h2 className="mt-8 text-3xl font-bold text-foreground">
                                No Legal Services Yet
                            </h2>

                            <p className="mx-auto mt-4 max-w-lg text-default-500">
                                Your legal profile is currently empty. Add your
                                legal services, consultation fees, and practice
                                areas so clients can discover and book your
                                expertise.
                            </p>

                            <div className="mt-8 flex justify-center">
                                <Button
                                    color="primary"
                                    size="lg"
                                    startContent={<FiPlus />}
                                >
                                    <Link
                                        href={"/dashboard/lawyer/add-service"}
                                    >
                                        {" "}
                                        Add Legal Service
                                    </Link>
                                </Button>
                            </div>

                            <div className="mt-10 grid gap-4 md:grid-cols-3">
                                <div className="rounded-xl border border-default-200 p-5">
                                    <h3 className="font-semibold">
                                        Create Your Services
                                    </h3>
                                    <p className="mt-2 text-sm text-default-500">
                                        Add consultation types and legal
                                        expertise.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-default-200 p-5">
                                    <h3 className="font-semibold">
                                        Set Your Pricing
                                    </h3>
                                    <p className="mt-2 text-sm text-default-500">
                                        Define consultation fees for your
                                        clients.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-default-200 p-5">
                                    <h3 className="font-semibold">
                                        Get Discovered
                                    </h3>
                                    <p className="mt-2 text-sm text-default-500">
                                        Publish your profile to appear in lawyer
                                        searches.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Table className=" min-w-[1300px] ">
                        <Table.ResizableContainer>
                            <Table.Content aria-label="Developer Table">
                                <Table.Header>
                                    <Table.Column
                                        id="developer"
                                        isRowHeader
                                        defaultWidth="2fr"
                                        minWidth={250}
                                    >
                                        Lawyer
                                        <Table.ColumnResizer />
                                    </Table.Column>

                                    <Table.Column
                                        id="role"
                                        defaultWidth="1.3fr"
                                        minWidth={180}
                                    >
                                        Service
                                        <Table.ColumnResizer />
                                    </Table.Column>

                                    <Table.Column
                                        id="stack"
                                        defaultWidth="1.4fr"
                                        minWidth={180}
                                    >
                                        Fee
                                        <Table.ColumnResizer />
                                    </Table.Column>

                                    <Table.Column
                                        id="status"
                                        defaultWidth="1fr"
                                        minWidth={120}
                                    >
                                        Status
                                        <Table.ColumnResizer />
                                    </Table.Column>

                                    <Table.Column
                                        id="email"
                                        defaultWidth="2fr"
                                        minWidth={250}
                                    >
                                        serviceName
                                        <Table.ColumnResizer />
                                    </Table.Column>

                                    <Table.Column
                                        id="action"
                                        defaultWidth="1.2fr"
                                        minWidth={180}
                                    >
                                        Actions
                                    </Table.Column>
                                </Table.Header>

                                <Table.Body>
                                    {manageData.map((service, i) => {
                                        console.log(service, "jadlj;");
                                        const {
                                            title,
                                            category,
                                            conFee,
                                            serviceName,
                                            status,
                                            banner,
                                            _id,
                                        } = service;
                                        return (
                                            <Table.Row key={i}>
                                                <Table.Cell>
                                                    <div className="flex items-center gap-3">
                                                        <Avatar
                                                            src={banner}
                                                            size="md"
                                                            radius="full"
                                                        />

                                                        <div>
                                                            <h4 className="font-semibold">
                                                                {title}
                                                            </h4>

                                                            {/* <p className="text-xs text-default-500">
                                                            {}
                                                        </p> */}
                                                        </div>
                                                    </div>
                                                </Table.Cell>

                                                <Table.Cell>
                                                    <div>
                                                        <p className="font-medium">
                                                            {category}
                                                        </p>
                                                    </div>
                                                </Table.Cell>

                                                <Table.Cell>
                                                    <Chip
                                                        color="primary"
                                                        variant="flat"
                                                        radius="sm"
                                                    >
                                                        {conFee}
                                                    </Chip>
                                                </Table.Cell>

                                                <Table.Cell>
                                                    <Chip
                                                        // color={getColor(status)}
                                                        variant="shadow"
                                                        radius="sm"
                                                    >
                                                        {status}
                                                    </Chip>
                                                </Table.Cell>

                                                <Table.Cell>
                                                    <div className="flex items-center gap-2">
                                                        {/* <FiGithub className="text-default-500" /> */}

                                                        {serviceName}
                                                    </div>
                                                </Table.Cell>

                                                <Table.Cell>
                                                    <div className="flex gap-2">
                                                        <Button
                                                            isIconOnly
                                                            size="sm"
                                                            radius="full"
                                                            color="primary"
                                                            variant="flat"
                                                        >
                                                            <FiEye size={16} />
                                                        </Button>

                                                        <Button
                                                            isIconOnly
                                                            size="sm"
                                                            radius="full"
                                                            color="warning"
                                                            variant="flat"
                                                        >
                                                            <EditModal
                                                                service={
                                                                    service
                                                                }
                                                            />
                                                        </Button>
                                                        <Delete
                                                            service={service}
                                                        />
                                                        {/* <Button
                                                isIconOnly
                                                size="sm"
                                                radius="full"
                                                color="danger"
                                                variant="flat"
                                            >
                                                <FiTrash2 size={16} />
                                            </Button> */}
                                                    </div>
                                                </Table.Cell>
                                            </Table.Row>
                                        );
                                    })}
                                </Table.Body>
                            </Table.Content>
                        </Table.ResizableContainer>
                    </Table>
                </>
            )}
        </>
    );
}
