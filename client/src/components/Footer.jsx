import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Footer } from 'flowbite-react';

export default function FooterCom() {
    return (
        <Footer container className='border-t-4 border-teal-500 bg-gray-800 text-white'>
            <div className='w-full max-w-7xl mx-auto p-6'>
                <div className='flex flex-col sm:flex-row justify-between'>
                    <div className='flex items-center space-x-4 mb-4 sm:mb-0'>
                        <Link
                            to='/'
                            className='text-xl font-bold tracking-wider hover:text-teal-400 transition-colors'
                        >
                            <span className='bg-gradient-to-r from-green-600 via-green-500 to-blue-300 px-2 py-1 rounded-lg'>
                                Harshith's
                            </span>
                            Store
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 sm:grid-cols-3'>
                        <div>
                            <Footer.Title title='Follow us' className='text-teal-400' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://github.com/Harshithb2r'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-teal-400 transition-colors'
                                >
                                    Github
                                </Footer.Link>
                                <Footer.Link
                                    href='https://www.linkedin.com/in/harshith-kumar-307a96252/'
                                    className='hover:text-teal-400 transition-colors'
                                >
                                    LinkedIn
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal' className='text-teal-400' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='#'
                                    className='hover:text-teal-400 transition-colors'
                                >
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link
                                    href='#'
                                    className='hover:text-teal-400 transition-colors'
                                >
                                    Terms &amp; Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider className='border-teal-400' />
                <div className='flex flex-col sm:flex-row items-center justify-between mt-4'>
                    <Footer.Copyright
                        href='#'
                        by="Harshith's Store"
                        year={new Date().getFullYear()}
                        className='text-gray-400'
                    />
                    <div className='flex space-x-4 mt-4 sm:mt-0'>
                        <Footer.Icon
                            href='https://www.linkedin.com/in/harshith-kumar-307a96252/'
                            icon={BsLinkedin}
                            className='text-xl hover:text-teal-400 transition-colors'
                        />
                        <Footer.Icon
                            href='https://github.com/Harshithb2r'
                            icon={BsGithub}
                            className='text-xl hover:text-teal-400 transition-colors'
                        />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
