import React, { useEffect, useState } from 'react'
import { getSchoolDataApi } from '../Utils/Apis';
import DataLoader from '../Layouts/Loader';
import { Link } from 'react-router-dom';

const SchoolDashboard = () => {

    const token = localStorage.getItem('token');

    //loader State
    const [loaderStatee, setloaderStatee] = useState(false);
    const [schoolData, setSchoolData] = useState([]);

    useEffect(() => {
        getAllSchoolData();
    }, [token])

    const getAllSchoolData = async () => {
        try {
            setloaderStatee(true);
            const search = '';
            const page = '';
            const size = '';
            var response = await getSchoolDataApi(search, page, size);
            if (response?.status === 200) {
                if (response?.data?.status === 'success') {
                    setSchoolData(response?.data?.schools);
                    setloaderStatee(false);
                }
            }
            else {
                setloaderStatee(false);
                console.log(response?.data?.message);
            }
        }
        catch (error) {
            setloaderStatee(false);
            console.log(error, 'school error')
        }
    }



    return (
        <>
            {
                loaderStatee && (
                    <DataLoader />
                )
            }
            <div className="container-fluid">
                <div className="row">
                    <table className="table mt-2 mb-0">
                        <tbody>
                            {schoolData.slice(0, 8).map((item) => (
                                <tr key={item.id}>
                                    <td className='greyText'><h3>{item.schoolName}</h3></td>
                                    <td>{item.status ? <h3 className='activeText'> Active </h3> : <h3 className='deactiveText'> InActive </h3>}</td>
                                    <td className='text-end'><Link className='text-center text-black text-decoration-none viewDetailsButtons p-1' to={`/viewSchoolDetails/${item.schoolBusinessId}`}><span>View Details</span></Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SchoolDashboard