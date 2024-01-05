import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


export default function AdminMemberMealActivityChart() {
    const { theme } = useContext(AuthContext);
    const userData = [
        { name: "Md Nahid", money: 3000 },
        { name: "Aziz", money: 1500 },
        { name: "Shoron", money: 1200 },
        { name: "ramim", money: 2500 },
        { name: "ryhan", money: 2000 },
    ];

    const userName = userData?.map(user => user?.name);
    const money = userData?.map(user => user?.money);
    const chartConfig = {
        type: "bar",
        height: 280,
        series: [
            {
                name: "Money Quantity",
                data: money, // Adjust these values based on your data
            },
        ],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
                borderStyle: 'solid',
                borderColor: '#ff0000',
                borderWidth: 0,
            },
            title: {
                show: "",
            },
            dataLabels: {
                enabled: false,
            },
            colors: [`${theme ? 'white' : '#0b161d'}`],
            plotOptions: {
                bar: {
                    columnWidth: 16, // Set the bar width to 10px
                    borderRadius: 4,
                },
            },
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: true,
                },
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "14px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
                categories: userName,
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
            },
            grid: {
                show: true,
                borderColor: `${theme ? '#53565859' : 'lightGray'}`,
                strokeDashArray: 0,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    top: 5,
                    right: 20,
                },
            },
            fill: {
                opacity: 0.8,
            },
            tooltip: {
                theme: "light",
            },
        },
    };
    return (
        <Card className={`${theme ? 'bg-gray-900' : 'bg-white'}`}>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            >
                <div className="w-max rounded-lg bg-[#05111bf6] p-2 text-white">
                    <img src="https://i.ibb.co/7tzn3Xq/pngwing-com-1.png" alt="icon" className="w-[40px]" />
                </div>
                <div>
                    <Typography variant="h6" color={`${theme ? 'white' : 'blue-gray'}`}>
                        টাকা জমার পরিমান
                    </Typography>
                    <Typography
                        variant="small"
                        style={{ color: `${theme ? '#878889' : '#303234'}` }}
                        className="max-w-md mt-1 font-normal"
                    >
                        বর্তমান মেস মেম্বারদের টাকা জমার দেয়ার  পরিমান
                    </Typography>
                </div>
            </CardHeader>
            
            <CardBody className="px-2 pb-0">
                <Chart {...chartConfig} />
            </CardBody>
        </Card>
    );
}
