import {Mail, PhoneCall} from "lucide-react";
import {NavLink} from "react-router-dom";
import {ChangeEvent, useState} from "react";
import RentalNote from "./RentalNote.tsx";

export default function Form(){
    const [selectData,setSelectData] = useState({
        name: '',
        email:'',
        phone: '',
        numberOfPeople:'',
        selectField: '',
        message: ''
    });

    const selectHandle = (e: ChangeEvent<HTMLSelectElement>)=>{
        setSelectData({
            ...selectData,
            selectField: e.target.value,
        })
    }

    return(
        <div className={'mt-40'}>
            <div className={'flex mx-auto w-11/12 sm:w-[620px] lg:w-[1100px] xl:w-[1100px] 2xl:w-[1200px] 2xl:flex 2xl:mx-auto'}>
                <div className={'grid lg:grid-cols-2 gap-20 md:w-full'}>
                    <div className={'rounded-xl p-5 md:h-auto items-center justify-center w-full'}>
                        <div className={'h-full'}>
                            <RentalNote />
                        </div>
                    </div>

                    <div className={'flex flex-col gap-4 bg-gray-50 rounded-xl shadow-xl p-5'}>
                        <h2 className={'font-bold text-2xl'}>Contact Us</h2>
                        <div className={'flex gap-4'}>
                            <PhoneCall className={'size-5'}/> <NavLink to={'/'}>201-206-4436</NavLink>
                        </div>
                        <div className={'flex gap-4'}><Mail className={'size-5'}/> <NavLink
                            to={'mailto:seasidebeachvacations@gmail.com'}>seasidebeachvacations@gmail.com</NavLink></div>
                        <hr/>
                        <form className={'w-full h-full flex flex-col gap-4 md:grid md:grid-cols-2'} onSubmit={(e)=> e.preventDefault()}>
                            <div className={'w-full'}>
                                <input type={'text'} className={'w-full px-6 py-2 rounded border-2'} placeholder={'Name'}/>
                            </div>
                            <div className={'w-full'}>
                                <input type={'text'} className={'w-full px-6 py-2 rounded border-2'} placeholder={'Phone'}/>
                            </div>
                            <div className={'w-full'}>
                                <input type={'text'} className={'w-full px-6 py-2 rounded border-2'} placeholder={'Email'}/>
                            </div>
                            <div className={'w-full'}>
                                <input type={'text'} className={'w-full px-6 py-2 rounded border-2'} placeholder={'Number of persons'}/>
                            </div>
                            <div className={'w-full col-span-full'}>
                                <select value={selectData.selectField} onChange={selectHandle} className={'w-full border-2 px-6 py-2 rounded cursor-pointer'}>
                                    <option disabled value={''}>Select a house</option>
                                    <option value={'Beach Escape'}>Beach Escape</option>
                                    <option value={'Ocean Oasis'}>Ocean Oasis</option>
                                    <option value={'Unit 1'}>Unit 1</option>
                                    <option value={'Unit 2'}>Unit 2</option>
                                    <option value={'Unit 3'}>Unit 3</option>
                                </select>
                            </div>
                            <div className={'w-full col-span-full'}>
                                <textarea placeholder={'Message'} rows={4} className={'w-full px-6 py-2 rounded border-2 resize-none'}></textarea>
                            </div>
                            <div className={'w-full col-span-full'}>
                                <input type={'submit'} className={'w-full font-bold bg-blue-500 text-white py-2 rounded-xl cursor-pointer hover:bg-blue-400 transition-all duration-200'} value={'Send'}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}