import { useParams } from 'react-router-dom'

export default function Payment() {
  const { id } = useParams();
  const booking = JSON.parse(localStorage.getItem('bookingHistory')).find(b => b.id === id);

  if (!booking) {
    return <div>No booking found!</div>;
  }

  return (
    <div className="payment-container">
      <h2>Payment for {booking.mentor}</h2>
      <p>Mentor: {booking.mentor}</p>
      <p>Field: {booking.field}</p>
      <p>Slot: {booking.slot}</p>
      <p>Total Cost: ₹{booking.totalCost}</p>
      <button onClick={() => alert('Payment Successful!')}>Complete Payment</button>
    </div>
  );
}
