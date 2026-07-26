const AllTransiction = ({ transactions }) => {
    // const transactions = [
    //     {
    //         _id: "6a900001a5a0d0d58efbec01",
    //         transactionId: "pi_3RtAbcX9LkP2Mn4Q",
    //         clientEmail: "client1@gmail.com",
    //         lawyerEmail: "lawyer1@gmail.com",
    //         amount: 200,
    //         paymentStatus: "paid",
    //         date: "2026-07-26T10:30:00.000Z",
    //     },
    //     {
    //         _id: "6a900001a5a0d0d58efbec02",
    //         transactionId: "pi_3RtDefY8JmQ5Rs7Z",
    //         clientEmail: "client2@gmail.com",
    //         lawyerEmail: "lawyer2@gmail.com",
    //         amount: 150,
    //         paymentStatus: "paid",
    //         date: "2026-07-25T15:45:00.000Z",
    //     },
    //     {
    //         _id: "6a900001a5a0d0d58efbec03",
    //         transactionId: "pi_3RtGhiP7XnK8Tu2A",
    //         clientEmail: "client3@gmail.com",
    //         lawyerEmail: "lawyer3@gmail.com",
    //         amount: 120,
    //         paymentStatus: "paid",
    //         date: "2026-07-24T09:20:00.000Z",
    //     },
    //     {
    //         _id: "6a900001a5a0d0d58efbec04",
    //         transactionId: "pi_3RtJklM4VbL6Wp1B",
    //         clientEmail: "client4@gmail.com",
    //         lawyerEmail: "lawyer4@gmail.com",
    //         amount: 300,
    //         paymentStatus: "paid",
    //         date: "2026-07-23T14:10:00.000Z",
    //     },
    //     {
    //         _id: "6a900001a5a0d0d58efbec05",
    //         transactionId: "pi_3RtMnoQ1ZaN9Hy5C",
    //         clientEmail: "client5@gmail.com",
    //         lawyerEmail: "lawyer5@gmail.com",
    //         amount: 180,
    //         paymentStatus: "paid",
    //         date: "2026-07-22T11:55:00.000Z",
    //     },
    //     {
    //         _id: "6a900001a5a0d0d58efbec06",
    //         transactionId: "pi_3RtPqrT6DfR3Kl8D",
    //         clientEmail: "client6@gmail.com",
    //         lawyerEmail: "lawyer6@gmail.com",
    //         amount: 250,
    //         paymentStatus: "paid",
    //         date: "2026-07-21T16:40:00.000Z",
    //     },
    // ];
    return (
        <div>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg">
                <table className="w-full min-w-[900px]">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="px-6 py-4 text-left">
                                Transaction ID
                            </th>
                            <th className="px-6 py-4 text-left">User Email</th>
                            <th className="px-6 py-4 text-left">
                                Lawyer Email
                            </th>
                            <th className="px-6 py-4 text-center">Amount</th>
                            <th className="px-6 py-4 text-center">Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.map((transaction) => (
                            <tr
                                key={transaction._id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4 font-medium text-gray-800">
                                    {transaction.transactionId}
                                </td>

                                <td className="px-6 py-4 text-gray-700">
                                    {transaction.clientEmail}
                                </td>

                                <td className="px-6 py-4 text-gray-700">
                                    {transaction.serviceEmail}
                                </td>

                                <td className="px-6 py-4 text-center">
                                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                                        ${transaction.consultationFee}
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-center text-gray-600">
                                    {new Date(
                                        transaction.hiringDate,
                                    ).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTransiction;
