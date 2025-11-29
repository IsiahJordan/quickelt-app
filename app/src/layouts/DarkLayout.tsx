import { Outlet } from 'react-router-dom'

export default function DarkLayout() {
  return (
    <div className="bg-background h-[100vh]">
      <Outlet/>
    </div>
  );
}
