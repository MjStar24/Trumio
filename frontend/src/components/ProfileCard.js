import { FilesCase,GenericEdit } from '@heathmont/moon-icons-tw';
import { Progress } from '@heathmont/moon-core-tw';
 const ProfileCard=({props})=>{
    return <>
       <div className="container border border-neutral-200 h-1/4 w-full p-4 px-6 shadow-md rounded-lg" style={{height:'318px'}}>
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img className="h-16 w-16 rounded-full" src={props.profilePic ? props.profilePic : "/logo192.png"} alt="image"></img>
                    <div>
                        <h2 className='font-medium'>{props.name}</h2>
                        <span className='font-light'>{props.userId}</span>
                    </div>
                </div>

                <div>
                    <button className="ml-2 px-3 py-1 bg-blue-600 bg-opacity-10 rounded-lg justify-center items-center flex">
                        <div className="text-center text-blue-600 text-sm font-medium font-dmsans leading-normal flex items-center justify-around">
                        <GenericEdit className="h-6 w-6"/><span>Edit</span>
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex items-center pt-4 pb-1">
                {/* <img className="h-8 w-8 " src="/logo192.png" alt="bag"></img> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<mask id="mask0_30862_6065" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
<rect width="16" height="16" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_30862_6065)">
<path d="M2.79998 13.6C2.46998 13.6 2.18748 13.4825 1.95248 13.2475C1.71748 13.0125 1.59998 12.73 1.59998 12.4V5.20001C1.59998 4.87001 1.71748 4.58751 1.95248 4.35251C2.18748 4.11751 2.46998 4.00001 2.79998 4.00001H5.59998V2.79647C5.59998 2.4655 5.71762 2.18334 5.95291 1.95001C6.1882 1.71667 6.47104 1.60001 6.80144 1.60001H9.20438C9.53478 1.60001 9.81664 1.71751 10.05 1.95251C10.2833 2.18751 10.4 2.47001 10.4 2.80001V4.00001H13.2C13.53 4.00001 13.8125 4.11751 14.0475 4.35251C14.2825 4.58751 14.4 4.87001 14.4 5.20001V12.4C14.4 12.73 14.2825 13.0125 14.0475 13.2475C13.8125 13.4825 13.53 13.6 13.2 13.6H2.79998ZM2.79998 12.4H13.2V5.20001H2.79998V12.4ZM6.79998 4.00001H9.19998V2.80001H6.79998V4.00001Z" fill="#595D62"/>
</g>
</svg>
                <span className='ml-1'>{props.work}</span>
            </div>

            <div className="flex items-center pb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
<mask id="mask0_30862_6070" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
<rect width="18" height="18" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_30862_6070)">
<path d="M7.99999 13.6L3.59999 11.4V7.39999L0.799988 5.99999L7.99999 2.39999L15.2 5.99999V11.2H14V6.59999L12.4 7.39999V11.4L7.99999 13.6ZM7.99999 8.24999L12.5167 5.99999L7.99999 3.74999L3.48332 5.99999L7.99999 8.24999ZM7.99999 12.25L11.2 10.65V7.99999L7.99999 9.59999L4.79999 7.99999V10.65L7.99999 12.25Z" fill="#595D62"/>
</g>
</svg>
                <span className='ml-1'>{props.education}</span>
            </div>
            <hr></hr>

            <div className="pt-4">
                <div className="flex justify-between">
                    <div>
                    <span className="font-light">Tier Info</span>
                    <div className="flex items-center ">
                        <img className="w-[21.42px] h-6" src={props.tierPic} alt="pioneer"></img>
                        <span className='font-medium ml-2'>{props.tier}</span>
                    </div>
                    </div>


                    <div >
                    <span className='font-light'>Sparks</span>
                    <div className="flex items-center ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 bg-blue-600 rounded-xl justify-center items-center gap-1 inline-flex">
                    <g id="Other">
                    <path id="lightning" d="M13.6869 5.77037C13.7527 5.67958 13.8303 5.59732 13.8954 5.50603C14.309 4.92611 13.9134 4.0625 13.1633 4.0625H9.51153C9.25445 4.0625 9.00972 4.17473 8.83939 4.37073L6.1645 8.4813C5.65214 9.07087 6.06334 10 6.83664 10H7.00456C7.71109 10 8.12232 10.7806 7.78229 11.3704C7.73539 11.4518 7.68458 11.5315 7.64892 11.6184L6.36799 14.7395C6.29667 14.9132 6.17755 15.0715 6.14345 15.2563C6.08217 15.5883 6.32495 15.9375 6.69982 15.9375C6.80693 15.9375 6.91182 15.9065 7.00227 15.8481L12.513 11.422C13.1534 11.0086 12.8657 10 12.1074 10C11.4542 10 11.1196 9.22409 11.5248 8.7358C11.5606 8.69266 11.5986 8.65091 11.6315 8.60552L13.6869 5.77037Z" fill="white"/>
                    </g>
                    </svg>
                        <span className='ml-2 font-medium'>{props.sparks} Sparks</span>
                    </div>
                    </div>

                </div>
            </div>
            <Progress value={70} size="4xs" className="bg-cyan-100 my-2 [&_.progress]:bg-blue-600" />
                <div className='flex justify-between'>
                    <div className='flex items-center '>
                        <span className="mr-2 font-light">Advance towards</span>
                        <img className="w-[21.41px] h-6" src={props.nextTierPic} alt="advance towards"></img>
                        <span className='ml-2 font-medium'>{props.advanceTowards}</span>
                    </div>
                    <div className="flex items-center">
                        <span>{props.points}/500 Points</span>
                    </div>
                </div>
       </div> 
    </>
}

export default ProfileCard