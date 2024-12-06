import React from 'react'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ExitToApp from '@mui/icons-material/ExitToApp';
import CreateNewFolder from '@mui/icons-material/CreateNewFolder';

const TimelineContext = () => {
  return (
    <div className="flex flex-col w-full md:flex-row md:justify-center  md:items-center p-6 gap-4 md:gap-16 mb-10 mt-10 md:mt-6">
<div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 mt-2 md:mt-6">
<div className="md:text-center">
<h2><ContactPhoneIcon style={{fontSize:16, color:'gray'}}></ContactPhoneIcon>{" "}Flexible meetings</h2>
<p className="text-gray-400">Tailored to your needs</p>
</div>
<div className="border-gray-200 md:border-l-2 border-t-2 md:border-t-0 h-0 md:h-12 w-full md:w-0"></div>
<div className="md:text-center">
<h2><ExitToApp style={{fontSize:16, color:'gray'}}></ExitToApp>{" "}Adaptive time</h2><p className="text-gray-400">Adjust as per your schedule</p>
</div>
<div className="border-gray-200 md:border-l-2 border-t-2 md:border-t-0 h-0 md:h-12 w-full md:w-0"></div>
<div className="md:text-center">
<h2><CreateNewFolder style={{fontSize:16, color:'gray'}}></CreateNewFolder>{" "}Via g-meet</h2><p className="text-gray-400">Human way to communicate</p>
</div>
</div>
</div>
  )
}

export default TimelineContext
