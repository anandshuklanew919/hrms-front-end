import { createBrowserRouter } from "react-router-dom";
import RootRoute from "./RootRoute";
import MasterRoot from '../component/Masters/Index'
import MasterDashboard from '../component/Masters/MasterDashboard/MasterDashboard'
import DepartmentSummaryWrap from '../component/Masters/Department/DepartmentSummary/DepartmentSummaryWrap'
import CompanySummaryWrap from '../component/Masters/Company/CompanySummary/CompanySummaryWrap'
import BusinessUnitSummaryWrap from '../component/Masters/BussinessUnit/BusinessUnitSummary/BusinessUnitSummaryWrap'
import SectionSummaryWrap from '../component/Masters/Section/SectionSummary/SectionSummaryWrap'
import EmployeeRoot from '../component/Employee/Index'
import EmployeeDashboard from '../component/Employee/EmployeeDashboard/EmployeeDashboard'
import EmployeeSummaryWrap from '../component/Employee/EmployeeSummary/EmployeeSummaryWrap'



const routeDefnition = createBrowserRouter([
    {
        path: '/',
        element: <RootRoute />,
        children: [
            {
                path: 'master',
                element: <MasterRoot />,
                children: [
                    {
                        path: '',
                        element: <MasterDashboard />
                    },
                    {
                        path: 'company',
                        element: <CompanySummaryWrap />
                    },
                    {
                        path: 'businessunit',
                        element: <BusinessUnitSummaryWrap />
                    },
                    {
                        path: 'department',
                        element: <DepartmentSummaryWrap />
                    },
                    {
                        path: 'section',
                        element: <SectionSummaryWrap />
                    },

                ]
            },
            {
                path: 'employee',
                element: <EmployeeRoot />,
                children: [
                    {
                        path: '',
                        element: <EmployeeDashboard />
                    },
                    {
                        path: 'summary',
                        element: <EmployeeSummaryWrap />
                    },
                    {
                        path: 'new',
                        element: <EmployeeSummaryWrap />
                    },
                    {
                        path: 'edit/:id',
                        element: <EmployeeSummaryWrap />
                    },
                ]
            }
        ]

    }
])

export default routeDefnition;
