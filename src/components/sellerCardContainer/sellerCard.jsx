import { data } from '../../data.js';
import { SellerCardStyled } from './sellerCard.styled';

const SellerCard = () => {
  return (
    <SellerCardStyled>
      {data.map((item) => {
        return (
          <div className='sellerCard' key={item.id}>
            <div className='number'>
              <p>0{item.id}</p>
            </div>

            <div className='profile'>
              <img src={item.image} alt='seller' />
              <div className='text'>
                <h3>{item.name}</h3>
                <p>{item.currency}</p>
              </div>
            </div>
          </div>
        );
      })}
    </SellerCardStyled>
  );
};

export default SellerCard;
