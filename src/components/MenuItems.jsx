import React,{useState} from 'react'
import closeMenu from '../images/icon-close-menu.svg'
import todo from '../images/icon-todo.svg'
import calendar from '../images/icon-calendar.svg'
import remainder from '../images/icon-reminders.svg'
import planning from '../images/icon-planning.svg'

const MenuItems = ({toggle, active}) => {

    const[featureState, setFeatureState] = useState(false);
    function changeFeatureState(){
        setFeatureState(!featureState);
        if(companyState){
            setCompanyState(!companyState);
        }
    }

    const[companyState, setCompanyState] = useState(false);
    function changeComapanyState(){
        setCompanyState(!companyState);
        if(featureState){
            setFeatureState(!featureState);
        }
    }
  return (
    <div >

        <nav className={active?' w-9 flex flex-col sm:hidden ':'hidden'}> 
      
            
            <img src={closeMenu}  alt="Menu"  onClick={() =>{toggle();
                if(featureState){changeFeatureState()};
                if(companyState){changeComapanyState()}}}  className="z-30"/>
            <ul className='flex flex-col gap-3 absolute inset-0 left-1/3 bg-white  items-start z-20 h-full' >
                
                <div className="mt-20 text-xl px-6 flex flex-col gap-4 w-full">
                <li className=''>
                    <div className='flex gap-3 items-center' onClick={changeFeatureState}>
                        <h1>Features</h1>
                        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg" className=' h-2'>
                            <path stroke="currentColor" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
                        </svg>
                    </div>
                    <div className={featureState?'mt-5 ':'hidden'} >
                        <ul>
                            <li>
                                <div className='flex gap-4 px-5 mt-4 items-center'>
                                    <img src={todo} alt="todo" className='w-5'/>
                                    <h3>Todo List</h3>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-4 px-5 mt-4 items-center'>
                                    <img src={calendar} alt="calender" className='w-5'/>
                                    <h3>Calender</h3>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-4 px-5 mt-4 items-center'>
                                    <img src={remainder} alt="remainder" className='w-5'/>
                                    <h3>Planning</h3>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-4 px-5 mt-4 items-center'>
                                    <img src={planning} alt="planning" className='w-5'/>
                                    <h3>Todo List</h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className=''>
                    <div className='flex gap-3 items-center' onClick={changeComapanyState}>
                        <h1>Company</h1>
                        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg" className=' h-2 '>
                            <path stroke="currentColor" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
                        </svg>
                    </div>
                    <div className={companyState?'mt-5':'hidden'}>
                        <ul>
                            <li className='mt-4 px-5'>History</li>
                            <li className='mt-4 px-5'>Our Team</li>
                            <li className='mt-4 px-5'>Blog</li>
                        </ul>
                    </div>
                </li>
                <li>Careers</li>
                <li>About</li>
                <ul className='flex flex-col items-center mt-3 gap-7'>
                    <li><a href="#" className='block ' >Login</a></li>
                    <li><a href="#" className='border-2 px-14 py-2 rounded-lg'>Register</a></li>
                </ul>
                </div>
            </ul>

            <div className='absolute inset-0 bg-black/20 z-10 w-screen'>
                
            </div>

        </nav>


    </div>
  )
}

export default MenuItems