import { Outlet } from 'react-router-dom'
import NavBar from '@/components/NavBar'
import Icon from '@/components/Icon'
import Brand from '@/components/Brand'
import Button from '@/components/Button'

export default function NavLayout() {
  return (
    <div className="h-[100vh] pt-6">
      <NavBar
        bgColor="bg-primary-700/60"
        styles={['flex-0.5', 'flex-0.5', 'flex-3', 'flex-1']}
        children={[
          <Icon variant='nav'/>,
          <h4 className='text-default mb-1 mx-2'>Menu</h4>,
          <div className='justify-center'>
            <Brand variant='short' style='w-[60px]'/>
          </div>,
          <Button variant='accent' label='LOGOUT' color='text-default' onClick={() => {}}/>
        ]}
      />
      <Outlet/>
    </div>
  );
}
