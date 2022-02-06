import './style.scss'

const HotelRate = ({rate}) => {
  const stars = []
  for (let index = 0; index < 5; index++) {
    index < rate ? 
    stars.push(<div className="gold__star">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.65972 2.01548C7.19345 3.1303 6.62605 4.48729 6.39853 5.03215C6.17242 5.57553 5.98141 6.02589 5.98141 6.02589C5.98141 6.02589 5.54884 6.0628 5.02358 6.10267C4.49972 6.14254 3.54329 6.21489 2.89865 6.26362C2.25401 6.31382 1.37202 6.38027 0.939452 6.41276C0.506883 6.44524 0.117851 6.47625 0.075718 6.48068L-0.00012207 6.48954L0.0686958 6.55894C0.10802 6.59585 0.540589 7.00191 1.02934 7.46113C1.51949 7.92035 2.16132 8.52132 2.45625 8.79744C4.23569 10.466 4.64719 10.8514 4.66404 10.8647C4.68792 10.8839 4.76797 10.528 3.90283 14.2091C3.54329 15.7389 3.25257 16.9999 3.25257 16.9999C3.25257 16.9999 4.47304 16.2631 5.96034 15.3505C7.44625 14.438 8.67233 13.6938 8.68497 13.6968C8.6962 13.6997 9.24394 14.0541 9.89981 14.4823C10.5571 14.912 11.536 15.5513 12.0767 15.9043C12.6174 16.2572 13.2157 16.6485 13.4067 16.7725C13.5963 16.898 13.762 16.9999 13.762 16.9999C13.762 16.9999 13.7677 16.9748 13.762 16.9438C13.7536 16.8936 13.1848 14.1427 12.6722 11.6753C12.55 11.0817 12.4489 10.5856 12.4489 10.5723C12.4489 10.5531 13.3604 9.74098 16.658 6.81882C17.0204 6.4984 17.0246 6.49397 16.981 6.48363C16.9557 6.47773 15.5611 6.33007 13.8814 6.15435C12.2017 5.97864 10.8141 5.8295 10.7973 5.82212C10.7762 5.81326 10.7102 5.65822 10.5178 5.16356C10.3801 4.80623 9.93914 3.66778 9.53887 2.6327C9.13861 1.59761 8.74676 0.583193 8.66811 0.380901C8.58947 0.177132 8.52205 0.00732422 8.51644 -5.91278e-05C8.51222 -0.00596619 8.126 0.90066 7.65972 2.01548Z"
                fill="#CDBC1E"
              />
            </svg>
          </div>)
    : stars.push(<div className="ordinary__">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.65972 2.01554C7.19345 3.13037 6.62605 4.48735 6.39853 5.03221C6.17242 5.57559 5.98141 6.02595 5.98141 6.02595C5.98141 6.02595 5.54884 6.06287 5.02358 6.10273C4.49972 6.1426 3.54329 6.21495 2.89865 6.26368C2.25401 6.31388 1.37202 6.38033 0.939452 6.41282C0.506883 6.4453 0.117851 6.47631 0.075718 6.48074L-0.00012207 6.4896L0.0686958 6.559C0.10802 6.59591 0.540589 7.00197 1.02934 7.46119C1.51949 7.92041 2.16132 8.52138 2.45625 8.7975C4.23569 10.466 4.64719 10.8514 4.66404 10.8647C4.68792 10.8839 4.76797 10.5281 3.90283 14.2092C3.54329 15.7389 3.25257 16.9999 3.25257 16.9999C3.25257 16.9999 4.47304 16.2631 5.96034 15.3506C7.44625 14.4381 8.67233 13.6939 8.68497 13.6968C8.6962 13.6998 9.24394 14.0541 9.89981 14.4824C10.5571 14.912 11.536 15.5514 12.0767 15.9043C12.6174 16.2572 13.2157 16.6485 13.4067 16.7725C13.5963 16.8981 13.762 16.9999 13.762 16.9999C13.762 16.9999 13.7677 16.9748 13.762 16.9438C13.7536 16.8936 13.1848 14.1427 12.6722 11.6754C12.55 11.0818 12.4489 10.5856 12.4489 10.5724C12.4489 10.5532 13.3604 9.74104 16.658 6.81888C17.0204 6.49846 17.0246 6.49403 16.981 6.48369C16.9557 6.47779 15.5611 6.33013 13.8814 6.15441C12.2017 5.9787 10.8141 5.82957 10.7973 5.82218C10.7762 5.81332 10.7102 5.65828 10.5178 5.16362C10.3801 4.80629 9.93914 3.66784 9.53887 2.63276C9.13861 1.59767 8.74676 0.583254 8.66811 0.380962C8.58947 0.177193 8.52205 0.00738525 8.51644 1.90735e-06C8.51222 -0.00590515 8.126 0.900721 7.65972 2.01554Z"
            fill="#6C6845"
          />
          <path
            d="M7.65972 2.01554C7.19345 3.13037 6.62605 4.48735 6.39853 5.03221C6.17242 5.57559 5.98141 6.02595 5.98141 6.02595C5.98141 6.02595 5.54884 6.06287 5.02358 6.10273C4.49972 6.1426 3.54329 6.21495 2.89865 6.26368C2.25401 6.31388 1.37202 6.38033 0.939452 6.41282C0.506883 6.4453 0.117851 6.47631 0.075718 6.48074L-0.00012207 6.4896L0.0686958 6.559C0.10802 6.59591 0.540589 7.00197 1.02934 7.46119C1.51949 7.92041 2.16132 8.52138 2.45625 8.7975C4.23569 10.466 4.64719 10.8514 4.66404 10.8647C4.68792 10.8839 4.76797 10.5281 3.90283 14.2092C3.54329 15.7389 3.25257 16.9999 3.25257 16.9999C3.25257 16.9999 4.47304 16.2631 5.96034 15.3506C7.44625 14.4381 8.67233 13.6939 8.68497 13.6968C8.6962 13.6998 9.24394 14.0541 9.89981 14.4824C10.5571 14.912 11.536 15.5514 12.0767 15.9043C12.6174 16.2572 13.2157 16.6485 13.4067 16.7725C13.5963 16.8981 13.762 16.9999 13.762 16.9999C13.762 16.9999 13.7677 16.9748 13.762 16.9438C13.7536 16.8936 13.1848 14.1427 12.6722 11.6754C12.55 11.0818 12.4489 10.5856 12.4489 10.5724C12.4489 10.5532 13.3604 9.74104 16.658 6.81888C17.0204 6.49846 17.0246 6.49403 16.981 6.48369C16.9557 6.47779 15.5611 6.33013 13.8814 6.15441C12.2017 5.9787 10.8141 5.82957 10.7973 5.82218C10.7762 5.81332 10.7102 5.65828 10.5178 5.16362C10.3801 4.80629 9.93914 3.66784 9.53887 2.63276C9.13861 1.59767 8.74676 0.583254 8.66811 0.380962C8.58947 0.177193 8.52205 0.00738525 8.51644 1.90735e-06C8.51222 -0.00590515 8.126 0.900721 7.65972 2.01554Z"
            fill="white"
            fill-opacity="0.6"
          />
        </svg>
      </div>)
  }
  return (
    <div className="hotel__rate">
      {stars}
    </div>
  );
}
export default HotelRate;