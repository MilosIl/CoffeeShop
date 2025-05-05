import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { ProfileInformation, CoffeeOrdersCup } from './components/';

const ProfileContent = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const userOrders = JSON.parse(
    localStorage.getItem('coffee_shop_orders') || '[]'
  ).filter((order) => order.userId === user?.id);
  console.log(userOrders);
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    if (user.roll == 'owner') {
      navigate('/orders');
    }
  }, [user]);

  return (
    <div className="text-center">
      <div>
        <ProfileInformation name={user?.fullName} email={user?.email} />
        <div>
          <p className="mb-4 font-bold text-light-blue text-xl">
            Loyalty program
          </p>
          <p className="mb-10 font-medium text-sm leading-5">
            Pridružite se našem loyalty programu i uživajte u besplatnoj kafi!
            Svaka deseta kafa je na naš račun kao nagrada za vašu vernost.
          </p>
          <div className="gap-2 grid grid-cols-5 mx-auto max-w-md">
            {Array.from({ length: 10 }).map((_, index) => {
              const hasOrder = index < userOrders.length;
              const isFreeOrder = index === 9;

              return (
                <CoffeeOrdersCup
                  key={index}
                  hasOrder={hasOrder}
                  isFreeOrder={isFreeOrder}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfileContent };
