import {CogIcon, HomeIcon, SwitchHorizontalIcon,} from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  {name: 'Home', href: '#', icon: HomeIcon, current: true},
  {name: 'Payments', href: '#', icon: SwitchHorizontalIcon, current: false},
  {name: 'Account Details', href: '#', icon: CogIcon, current: false},
];

export const SidebarNavigation = () => {
  return (
    <div className='flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-orange-500 text-white'>
      <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
        {/* Logo */}
        <div className='flex items-center flex-shrink-0 px-4'>
          <p className={'text-xl font-bold'}>Starling client</p>
        </div>
        {/* Navigation */}
        <nav className={'flex-1 mt-5 px-2'}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-orange-100 text-orange-900'
                  : 'text-orange-600 hover:bg-orange-50 hover:text-orange-900',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? 'text-orange-500'
                    : 'text-orange-400 group-hover:text-orange-500',
                  'mr-3 flex-shrink-0 h-6 w-6'
                )}
              />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
