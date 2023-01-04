import React,{useState} from 'react'
import logo from '../images/logo.svg'
import openMenu from '../images/icon-menu.svg'
import MenuItems from './MenuItems'
import todo from '../images/icon-todo.svg'
import calendar from '../images/icon-calendar.svg'
import remainder from '../images/icon-reminders.svg'
import planning from '../images/icon-planning.svg'


const Header = () => {

    const[active, setActive] = useState(false)
    function toggle(){
        setActive(!active)
        console.log(active)
    }
  return (
    
    <div className='flex justify-between  items-center text-dimgray font-epilogue px-6 '>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div>
            <img src={openMenu} onClick={toggle} alt="Menu" className={active?'hidden':'sm:hidden absolute right-12 scale-150 z-20 w-6 top-7' } />
        </div>
        <nav className='hidden sm:flex ml-14 grow text-dimgray font-bold text-sm '> 
            <ul className='flex gap-9 items-center '>
                <li className=' relative group' id='arrow-up-down'>
                    <div className='flex gap-1 items-center cursor-pointer duration-200 hover:text-black  ' >
                        <h1 >Features</h1>
                        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg" className='ml-2 '>
                            <path stroke="currentColor" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
                        </svg>
                    </div>
                    
                    <div className='absolute text-sm shadow-[0_10px_20px_10px_rgba(0,0,0,0.1)] py-3 rounded-xl w-40  hidden group-hover:block cursor-pointer z-10 right-2' >
                        <ul>
                            <li>
                                <div className='flex gap-4 px-5 mt-2 items-center'>
                                    <img src={todo} alt="todo" className='w-5'/>
                                    <h3 className='hover:text-black'>Todo List</h3>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-4 px-5 mt-2 items-center'>
                                    <img src={calendar} alt="calender" className='w-5'/>
                                    <h3 className='hover:text-black'>Calender</h3>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-4 px-5 mt-2 items-center'>
                                    <img src={remainder} alt="remainder" className='w-5'/>
                                    <h3 className='hover:text-black'>Planning</h3>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-4 px-5 mt-2 mb-2 items-center'>
                                    <img src={planning} alt="planning" className='w-5'/>
                                    <h3 className='hover:text-black'>Todo List</h3>
                                </div>
                            </li>
                        </ul>
                    
                    </div>
                </li>
                <li className='group relative' id='arrow-up-down'>
                    <div className='flex gap-1 items-center cursor-pointer hover:text-black duration-200'>
                        <h1>Company</h1>
                        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg" className='ml-2'>
                            <path stroke="currentColor" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
                        </svg>
                    </div>
                    <div className='absolute text-sm shadow-[0_10px_30px_10px_rgba(0,0,0,0.1)] p-2 rounded-xl w-32  hidden group-hover:block cursor-pointer'>
                        <ul>
                            <li className='mt-2 px-5 hover:text-black'>History</li>
                            <li className='mt-4 px-5 hover:text-black'>Our Team</li>
                            <li className='mt-4 px-5 mb-2 hover:text-black'>Blog</li>
                        </ul>
                    </div>
                </li>
                <li className='cursor-pointer hover:text-black duration-200'>Careers</li>
                <li className='cursor-pointer hover:text-black duration-200'>About</li>
            </ul>

        </nav>
        <ul className='hidden sm:flex  gap-6 mr-3 text-dimgray font-bold text-sm'>
                <a href="#" className='block  py-2 hover:text-black duration-200'>Login</a>
                <a href="#" className='px-7 py-2 border-2 rounded-xl hover:text-black hover:border-black duration-200'>Register</a>
        </ul>

        <MenuItems toggle={toggle} active= {active} />

    </div>
    
  )
}

export default Header