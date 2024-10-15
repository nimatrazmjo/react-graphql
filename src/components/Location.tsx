import { useQuery } from '@apollo/client';
import { GET_LOCATIONS } from '../graphql/query';
import { ILocation } from '../types/location.type';

export default function () {
    const { loading, error, data } = useQuery(GET_LOCATIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div className="grid grid-cols-3 gap-5">
            {data.locations.map(({ id, name, description, photo }: ILocation) => (
                <div className='flex flex-col' key={id}>
                    <h3 className='text-lg'>{name}</h3>
                    <img width="400" height="250" alt="location-reference" src={`${photo}`} />
                    <br />
                    <b className='text-xl'>About this location:</b>
                    <p className='text-sm text-gray-600'>{description}</p>
                    <br />
                </div>
            ))}
        </div>
    );
}