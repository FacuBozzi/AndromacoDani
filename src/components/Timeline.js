import * as React from "react";
import styled, {css} from 'styled-components'

const Time = styled.div`
@keyframes timelineAnim { 
  0% {
    transform:translateY(0px);
  }
  
  50% {
    transform:translateY(4px);
  }

  100% {
    transform:translateY(0px);
  }
}

& path {
  counter-increment: my-counter;
  animation-name: timelineAnim;
  animation-duration: 5s;
  //animation-delay: calc(var(--animation-order) * 100ms);
  animation-delay: calc(var(--animation-order) * calc(5s/66));
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  animation-iteration-count:infinite;
}

`


function SvgTimeline(props) {
  return (
    <Time>
    <svg
      id="timeline"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 3792.7 1080"
      xmlSpace="preserve"
      width="1em"
      height="1em"
      {...props}
    >
      <style>
        {
          ".timeline_svg__st0{fill:none;stroke:#fff;stroke-width:.6867;stroke-miterlimit:10}"
        }
      </style>
      <path
        style={{"--animation-order":1}}
        className="timeline_svg__st0"
        d="M458.7 570.8s151.7-67.1 318.6-26.9 217.4 50.3 333.7 23.5c116.3-26.9 111.2-33.6 171.9-10.1s91 36.9 308.4-13.4c217.4-50.3 268 60.4 450 40.3s187.1-87.3 343.8-40.3c156.7 47 187.1 47 237.7 40.3 50.6-6.7 55.6-33.6 131.5-23.5 75.8 10.1 86 20.1 156.7 0 70.8-20.1 96.1-33.6 227.5 3.4 131.5 36.9 283.2-3.4 283.2-3.4"
      />
      <path
        style={{"--animation-order":2}}
        className="timeline_svg__st0"
        d="M3419.5 562s-151.7 35.2-284.8 1.9c-133.2-33.2-159.6-20-232.6-2.1s-82.3 8-157.5-.5c-75.1-8.5-81.4 17.7-139.9 21.7s-89.8 9.3-247.8-36.4-163 15-343.8 36.4-230.4-84.1-439.9-36.4c-209.5 47.6-238.6 33.6-300 11.7-61.4-21.9-57.1-15-171.2 9.6s-163.5 14.4-328.7-22.2-316.9 25.4-316.9 25.4"
      />
      <path
        style={{"--animation-order":3}}
        className="timeline_svg__st0"
        d="M3417.2 563.4s-151.7 30-286.5.5c-134.8-29.6-162.5-16.5-237.7-.8-75.1 15.7-83.8 5.9-158.2-1-74.4-6.9-81.9 18.7-148.3 20-66.5 1.3-98.7 11.8-257.9-32.6-159.2-44.4-164.2 9.9-343.8 32.6-179.6 22.7-228.3-77.5-429.8-32.6s-229.5 30.2-291.6 9.9c-62.1-20.3-58.5-13.3-170.5 9.1s-160.1 12-323.6-20.9-315.2 24-315.2 24"
      />
      <path
        style={{"--animation-order":4}}
        className="timeline_svg__st0"
        d="M3415 564.7s-151.7 24.9-288.2-1-165.4-12.9-242.7.5c-77.3 13.4-85.2 3.8-158.9-1.4-73.7-5.3-82.3 19.7-156.7 18.2-74.4-1.4-107.6 14.4-268-28.8s-165.4 4.8-343.8 28.8-226.1-71-419.7-28.8-220.3 26.9-283.2 8.2c-62.8-18.7-60-11.5-169.8 8.6-109.8 20.1-156.7 9.6-318.6-19.7S452 571.9 452 571.9"
      />
      <path
        style={{"--animation-order":5}}
        className="timeline_svg__st0"
        d="M3412.8 566s-151.7 19.8-289.9-2.4-168.3-9.4-247.8 1.8c-79.5 11.2-86.7 1.8-159.6-1.9-73-3.7-82.8 20.6-165.2 16.5-82.3-4.2-116.5 16.9-278.1-24.9-161.6-41.9-166.6-.3-343.8 24.9-177.2 25.3-223.9-64.4-409.6-24.9-185.6 39.5-211.2 23.5-274.7 6.4-63.6-17.1-61.4-9.7-169 8.2s-153.4 7.2-313.5-18.4c-160.1-25.6-311.8 21.1-311.8 21.1"
      />
      <path
        style={{"--animation-order":6}}
        className="timeline_svg__st0"
        d="M3410.5 567.4s-151.7 14.7-291.6-3.8c-139.9-18.5-171.2-5.9-252.8 3-81.6 9-88.1-.3-160.4-2.4-72.2-2.1-83.3 21.6-173.6 14.7-90.3-6.9-125.4 19.5-288.2-21.1-162.8-40.6-167.8-5.4-343.8 21.1s-221.8-57.9-399.5-21.1-202 20.1-266.3 4.6c-64.3-15.5-62.8-8-168.3 7.7-105.5 15.7-150 4.8-308.4-17.1-158.4-21.9-310.1 19.7-310.1 19.7"
      />
      <path
        style={{"--animation-order":7}}
        className="timeline_svg__st0"
        d="M3408.3 568.7s-151.7 9.6-293.3-5.3c-141.6-14.9-174.1-2.4-257.9 4.3-83.8 6.7-89.6-2.4-161.1-2.9s-83.8 22.5-182 12.9-134.4 22.1-298.3-17.3c-164-39.3-169-10.5-343.8 17.3s-219.6-51.3-389.3-17.3c-169.8 34-192.9 16.8-257.9 2.9-65-13.9-64.3-6.2-167.6 7.2-103.4 13.5-146.7 2.5-303.4-15.7S445.2 573 445.2 573"
      />
      <path
        style={{"--animation-order":8}}
        className="timeline_svg__st0"
        d="M3406 570s-151.7 4.5-295-6.7-177 1.1-262.9 5.6c-86 4.5-91-4.5-161.8-3.4-70.8 1.1-84.3 23.5-190.5 11.2s-143.3 24.6-308.4-13.4c-165.2-38-170.2-15.7-343.8 13.4-173.6 29.1-217.4-44.8-379.2-13.4-161.8 31.3-183.7 13.4-249.4 1.1-65.7-12.3-65.7-4.5-166.9 6.7-101.1 11.2-143.3 0-298.3-14.5S443 573.4 443 573.4"
      />
      <path
        style={{"--animation-order":9}}
        className="timeline_svg__st0"
        d="M3403.8 571.4s-151.7-.6-296.6-8.2c-144.9-7.5-179.9 4.6-268 6.9-88.1 2.2-92.5-6.6-162.5-3.8-70.1 2.7-84.8 24.5-198.9 9.4-114.1-15-152.2 27.2-318.6-9.6-166.4-36.8-171.4-20.8-343.8 9.6s-215.3-38.2-369.1-9.6c-153.9 28.6-174.6 10.1-241-.6s-67.2-2.7-166.1 6.2c-99 9-139.9-2.4-293.3-13.3s-305.1 15.3-305.1 15.3"
      />
      <path
        style={{"--animation-order":10}}
        className="timeline_svg__st0"
        d="M3401.5 572.7s-151.7-5.8-298.3-9.6c-146.6-3.8-182.8 8.2-273 8.2-90.3 0-93.9-8.6-163.2-4.3-69.3 4.3-85.2 25.4-207.3 7.7-122.1-17.7-161.1 29.7-328.7-5.8s-172.6-25.9-343.8 5.8c-171.2 31.6-213.1-31.6-359-5.8-145.9 25.9-165.4 6.7-232.6-2.4-67.2-9.1-68.6-1-165.4 5.8-96.8 6.7-136.5-4.8-288.2-12s-303.4 13.9-303.4 13.9"
      />
      <path
        style={{"--animation-order":11}}
        className="timeline_svg__st0"
        d="M3399.3 574s-151.7-10.9-300-11-185.6 11.7-278.1 9.4c-92.5-2.2-95.3-10.7-164-4.8s-85.7 26.4-215.7 5.9-170 32.3-338.8-1.9c-168.8-34.2-173.8-31-343.8 1.9s-210.9-25.1-348.9-1.9c-138 23.2-156.3 3.4-224.2-4.2-67.9-7.5-70.1.8-164.7 5.3s-133.2-7.2-283.2-10.7c-150-3.5-301.7 12.5-301.7 12.5"
      />
      <path
        style={{"--animation-order":12}}
        className="timeline_svg__st0"
        d="M3397 575.3s-151.7-16-301.7-12.5-188.5 15.2-283.2 10.7c-94.6-4.5-96.8-12.8-164.7-5.3-67.9 7.5-86.2 27.3-224.2 4.2-138-23.2-178.9 34.8-348.9 1.9-170-32.9-175-36.1-343.8-1.9s-208.8-18.5-338.8 1.9c-130 20.5-147.1 0-215.7-5.9s-71.5 2.6-164 4.8c-92.5 2.2-129.8-9.6-278.1-9.4-148.3.2-300 11-300 11"
      />
      <path
        style={{"--animation-order":13}}
        className="timeline_svg__st0"
        d="M3394.8 576.7s-151.7-21.1-303.4-13.9c-151.7 7.2-191.4 18.7-288.2 12-96.8-6.7-98.2-14.9-165.4-5.8-67.2 9.1-86.7 28.3-232.6 2.4-145.9-25.9-187.8 37.4-359 5.8-171.2-31.6-176.3-41.2-343.8-5.8-167.6 35.5-206.6-12-328.7 5.8-122.1 17.7-138-3.4-207.3-7.7-69.3-4.3-73 4.3-163.2 4.3-90.3 0-126.4-12-273-8.2-146.6 3.8-298.3 9.6-298.3 9.6"
      />
      <path
        style={{"--animation-order":14}}
        className="timeline_svg__st0"
        d="M3392.5 578s-151.7-26.2-305.1-15.3c-153.4 10.9-194.3 22.2-293.3 13.3-99-9-99.7-16.9-166.1-6.2s-87.2 29.2-241 .6c-153.9-28.6-196.7 40-369.1 9.6-172.4-30.4-177.5-46.4-343.8-9.6-166.4 36.8-204.4-5.4-318.6 9.6-114.1 15-128.8-6.7-198.9-9.4s-74.4 6.1-162.5 3.8c-88.1-2.2-123-14.4-268-6.9-144.9 7.5-296.6 8.2-296.6 8.2"
      />
      <path
        style={{"--animation-order":15}}
        className="timeline_svg__st0"
        d="M3390.3 579.3s-151.7-31.3-306.8-16.8-197.2 25.7-298.3 14.5c-101.1-11.2-101.1-19-166.9-6.7-65.7 12.3-87.6 30.2-249.4-1.1s-205.6 42.5-379.2 13.4-178.7-51.5-343.8-13.4c-165.2 38-202.3 1.1-308.4 13.4-106.2 12.3-119.7-10.1-190.5-11.2-70.8-1.1-75.8 7.8-161.8 3.4-86-4.5-119.7-16.8-262.9-5.6-143.3 11.2-295 6.7-295 6.7"
      />
      <path
        style={{"--animation-order":16}}
        className="timeline_svg__st0"
        d="M3388 580.7s-151.7-36.4-308.4-18.2-200.1 29.2-303.4 15.8c-103.3-13.4-102.6-21.1-167.6-7.2-65 13.9-88.1 31.2-257.9-2.9-169.8-34-214.5 45.1-389.3 17.3s-179.9-56.6-343.8-17.3c-164 39.3-200.1 7.7-298.3 17.3-98.2 9.6-110.5-13.4-182-12.9s-77.3 9.6-161.1 2.9c-83.8-6.7-116.3-19.2-257.9-4.3C576.7 586 425 576.4 425 576.4"
      />
      <path
        style={{"--animation-order":17}}
        className="timeline_svg__st0"
        d="M3385.8 582s-151.7-41.6-310.1-19.7c-158.4 21.9-203 32.8-308.4 17.1-105.5-15.7-104-23.2-168.3-7.7-64.3 15.5-88.6 32.1-266.3-4.6-177.7-36.8-223.4 47.6-399.5 21.1-176-26.5-181.1-61.7-343.8-21.1-162.8 40.6-197.9 14.2-288.2 21.1-90.3 6.9-101.4-16.8-173.6-14.7-72.2 2.1-78.7 11.3-160.4 2.4-81.6-9-112.9-21.6-252.8-3-139.9 18.5-291.6 3.8-291.6 3.8"
      />
      <path
        style={{"--animation-order":18}}
        className="timeline_svg__st0"
        d="M3383.5 583.3s-151.7-46.7-311.8-21.1c-160.1 25.6-205.9 36.3-313.5 18.4s-105.5-25.3-169-8.2c-63.6 17.1-89.1 33.1-274.7-6.4s-232.4 50.2-409.6 24.9c-177.2-25.3-182.3-66.8-343.8-24.9-161.6 42-195.8 20.9-278.1 25-82.3 4.2-92.2-20.1-165.2-16.5-73 3.7-80.2 13.1-159.6 1.9-79.5-11.2-109.6-24-247.8-1.8-138.2 22.2-289.9 2.4-289.9 2.4"
      />
      <path
        style={{"--animation-order":19}}
        className="timeline_svg__st0"
        d="M3381.3 584.7s-151.7-51.8-313.5-22.5-208.8 39.8-318.6 19.7c-109.8-20.1-106.9-27.3-169.7-8.6-62.8 18.7-89.6 34-283.2-8.2s-241.3 52.7-419.7 28.8c-178.4-24-183.5-71.9-343.8-28.8-160.4 43.2-193.6 27.3-268 28.8-74.4 1.4-83.1-23.5-156.7-18.2-73.7 5.3-81.6 14.9-158.9 1.4-77.3-13.4-106.2-26.4-242.7-.5s-288.2 1-288.2 1"
      />
      <path
        style={{"--animation-order":20}}
        className="timeline_svg__st0"
        d="M3379 586s-151.7-56.9-315.2-24-211.6 43.3-323.6 20.9c-112-22.4-108.4-29.4-170.5-9.1-62.1 20.3-90.1 35-291.6-9.9-201.5-44.9-250.2 55.3-429.8 32.6-179.6-22.7-184.7-77-343.8-32.6-159.2 44.4-191.4 33.9-257.9 32.6-66.5-1.3-73.9-26.9-148.3-20-74.4 6.9-83.1 16.6-158.2 1-75.1-15.7-102.8-28.8-237.6.8s-286.5-.5-286.5-.5"
      />
      <path
        style={{"--animation-order":21}}
        className="timeline_svg__st0"
        d="M3376.8 587.3s-151.7-62-316.9-25.4-214.5 46.8-328.7 22.2c-114.1-24.6-109.8-31.5-171.2-9.6-61.4 21.9-90.5 36-300-11.7-209.5-47.6-259.1 57.9-439.9 36.4-180.8-21.4-185.9-82.2-343.8-36.4-158 45.7-189.3 40.4-247.8 36.4s-64.8-30.2-139.9-21.7c-75.1 8.5-84.5 18.4-157.5.5s-99.4-31.2-232.6 2.1c-133.2 33.2-284.8-1.9-284.8-1.9"
      />
      <path
        style={{"--animation-order":22}}
        className="timeline_svg__st0"
        d="M3374.5 588.7s-151.7-67.1-318.6-26.9c-166.9 40.3-217.4 50.3-333.7 23.5-116.3-26.9-111.2-33.6-171.9-10.1s-91 36.9-308.4-13.4c-217.4-50.3-268 60.4-450 40.3s-187.1-87.3-343.8-40.3c-156.7 47-187.1 47-237.6 40.3-50.6-6.7-55.6-33.6-131.5-23.5-75.8 10.1-86 20.1-156.7 0-70.8-20.1-96.1-33.6-227.5 3.4-131.5 36.9-283.2-3.4-283.2-3.4"
      />
      <g>
        <path
          style={{"--animation-order":23}}
          className="timeline_svg__st0"
          d="M81 590.2s188.9-263.4 396.7-105.4C685.5 642.9 748.4 682.4 893.2 577c144.8-105.4 138.5-131.7 214.1-39.5s113.3 144.9 384.1-52.7 333.7 237.1 560.4 158.1 233-342.5 428.1-158.1c195.2 184.4 233 184.4 295.9 158.1 63-26.3 69.3-131.7 163.7-92.2 94.4 39.5 107 79 195.2 0S3254.3 419 3418 563.9c163.7 144.9 352.6-13.2 352.6-13.2"
        />
        <path
          style={{"--animation-order":24}}
          className="timeline_svg__st0"
          d="M3767.7 555.9s-188.9 138-354.7 7.5c-165.8-130.5-198.8-78.4-289.6-8.2-90.8 70.2-102.5 31.4-196.1-1.9-93.5-33.2-101.3 69.6-174.2 85.3-72.9 15.7-111.8 36.4-308.5-143s-203 59-428.1 143c-225.2 84-286.9-329.9-547.8-143s-297.1 131.7-373.6 45.8-71.1-59-213.2 37.6-203.6 56.4-409.2-87.2C267.1 348.3 78.2 591.7 78.2 591.7"
        />
        <path
          style={{"--animation-order":25}}
          className="timeline_svg__st0"
          d="M3764.9 561.2s-188.9 117.9-356.8 1.9-202.4-64.6-295.9-3.1c-93.5 61.5-104.3 23.2-197-3.8-92.6-27-101.9 73.4-184.7 78.4-82.7 5-122.9 46.4-321.1-127.9-198.2-174.4-204.5 38.9-428.1 127.9-223.7 89.1-284.2-304.2-535.2-127.9s-285.7 118.5-363.1 38.9c-77.4-79.7-72.9-52.1-212.3 35.8-139.4 87.8-199.4 47-402.9-82.2-203.5-129.3-392.4 93.9-392.4 93.9"
        />
        <path
          style={{"--animation-order":26}}
          className="timeline_svg__st0"
          d="M3762.1 566.4s-188.9 97.8-358.9-3.8c-170-101.6-206-50.8-302.2 1.9-96.2 52.7-106.1 15.1-197.9-5.6-91.7-20.7-102.5 77.1-195.2 71.5-92.6-5.6-134 56.4-333.7-112.9s-206 18.8-428.1 112.9c-222.2 94.1-281.5-278.5-522.6-112.9s-274.3 105.4-352.6 32c-78.3-73.4-74.7-45.2-211.4 33.9-136.7 79-195.2 37.6-396.7-77.1-201.3-114.9-390.2 88.3-390.2 88.3"
        />
        <path
          style={{"--animation-order":27}}
          className="timeline_svg__st0"
          d="M3759.3 571.6s-188.9 77.8-361-9.4-209.6-37-308.5 6.9-107.9 6.9-198.8-7.5c-90.8-14.4-103.1 80.9-205.7 64.6-102.5-16.3-145.1 66.5-346.3-97.8-201.2-164.3-207.5-1.3-428.1 97.8-220.7 99.1-278.8-252.8-510-97.8s-262.9 92.2-342.1 25.1-76.5-38.3-210.5 32c-134 70.2-191 28.2-390.4-72.1-199.2-100.5-388.1 82.7-388.1 82.7"
        />
        <path
          style={{"--animation-order":28}}
          className="timeline_svg__st0"
          d="M3756.5 576.8s-188.9 57.7-363.1-15.1c-174.2-72.8-213.2-23.2-314.8 11.9s-109.7-1.3-199.7-9.4c-89.9-8.2-103.7 84.7-216.2 57.7-112.4-27-156.2 76.5-358.9-82.8s-209-21.3-428.1 82.8c-219.2 104.1-276.1-227-497.4-82.8s-251.5 79-331.6 18.2c-80-60.8-78.3-31.4-209.6 30.1S650.3 606.2 453 520.3 67 597.5 67 597.5"
        />
        <path
          style={{"--animation-order":29}}
          className="timeline_svg__st0"
          d="M3753.7 582.1s-188.9 37.6-365.2-20.7c-176.3-58.3-216.8-9.4-321.1 16.9-104.3 26.3-111.5-9.4-200.6-11.3-89-1.9-104.3 88.4-226.7 50.8-122.3-37.6-167.3 86.6-371.5-67.7s-210.5-41.4-428.1 67.7c-217.7 109.1-273.4-201.3-484.8-67.7s-240.2 65.9-321.1 11.3-80.1-24.5-208.7 28.2-182.6 9.4-377.8-62.1C253.1 456 64.2 599 64.2 599"
        />
        <path
          style={{"--animation-order":30}}
          className="timeline_svg__st0"
          d="M3750.9 587.3S3562 604.9 3383.6 561c-178.4-43.9-220.4 4.4-327.4 22-107 17.6-113.3-17.6-201.5-13.2-88.1 4.4-104.9 92.2-237.2 43.9s-178.4 96.6-384.1-52.7c-205.7-149.3-212-61.5-428.1 52.7-216.2 114.2-270.7-175.6-472.2-52.7s-228.8 52.7-310.6 4.4c-81.8-48.3-81.8-17.6-207.8 26.3-125.9 43.9-178.4 0-371.5-57.1s-382 65.9-382 65.9"
        />
        <path
          style={{"--animation-order":31}}
          className="timeline_svg__st0"
          d="M3748.1 592.5s-188.9-2.5-369.4-32c-180.5-29.5-224 18.2-333.7 27-109.7 8.8-115.1-25.7-202.4-15.1-87.2 10.7-105.5 96-247.6 37s-189.5 106.6-396.7-37.6c-207.2-144.3-213.5-81.5-428.1 37.6-214.7 119.2-268-149.9-459.6-37.6s-217.4 39.5-300.1-2.5-83.6-10.7-206.9 24.5c-123.2 35.1-174.2-9.4-365.2-52.1S58.5 601.9 58.5 601.9"
        />
        <path
          style={{"--animation-order":32}}
          className="timeline_svg__st0"
          d="M3745.3 597.7s-188.9-22.6-371.5-37.6c-182.6-15.1-227.6 32-340 32s-116.9-33.9-203.3-16.9c-86.3 16.9-106.1 99.7-258.1 30.1-152-69.6-200.6 116.7-409.2-22.6-208.7-139.2-215-101.6-428.1 22.6-213.2 124.2-265.3-124.2-447-22.6s-206 26.3-289.6-9.4-85.4-3.8-206 22.6c-120.5 26.3-170-18.8-358.9-47-188.9-28.2-377.8 54.6-377.8 54.6"
        />
        <path
          style={{"--animation-order":33}}
          className="timeline_svg__st0"
          d="M3742.5 603s-188.9-42.6-373.6-43.3c-184.7-.6-231.2 45.8-346.3 37-115.1-8.8-118.7-42-204.2-18.8-85.4 23.2-106.7 103.5-268.6 23.2-161.9-80.3-211.7 126.7-421.8-7.5-210.2-134.2-216.5-121.7-428.1 7.5-211.7 129.2-262.6-98.5-434.4-7.5s-194.6 13.2-279.1-16.3-87.2 3.1-205.1 20.7c-117.8 17.6-165.8-28.2-352.6-42S53 604.8 53 604.8"
        />
        <path
          style={{"--animation-order":34}}
          className="timeline_svg__st0"
          d="M3739.8 608.2s-188.9-62.7-375.7-48.9c-186.8 13.8-234.8 59.6-352.6 42-117.8-17.6-120.5-50.2-205.1-20.7-84.5 29.5-107.3 107.3-279.1 16.3-171.8-90.9-222.8 136.7-434.4 7.5-211.7-129.2-218-141.7-428.1-7.5-210.2 134.2-259.9-72.8-421.8 7.5s-183.2 0-268.6-23.2c-85.4-23.2-89 10-204.2 18.8-115.1 8.8-161.6-37.6-346.3-37S50.2 606.3 50.2 606.3"
        />
        <path
          style={{"--animation-order":35}}
          className="timeline_svg__st0"
          d="M3737 613.4s-188.9-82.8-377.8-54.6c-188.9 28.2-238.4 73.4-358.9 47-120.5-26.3-122.3-58.3-206-22.6-83.6 35.8-107.9 111-289.6 9.4s-233.9 146.8-447 22.6c-213.2-124.2-219.5-161.8-428.1-22.6-208.7 139.2-257.2-47-409.2 22.6s-171.8-13.2-258.1-30.1S871.5 602 759 602c-112.4 0-157.4-47-340-32-182.6 15.1-371.5 37.6-371.5 37.6"
        />
        <path
          style={{"--animation-order":36}}
          className="timeline_svg__st0"
          d="M3734.2 618.6s-188.9-102.9-379.9-60.2c-191 42.7-241.9 87.2-365.2 52.1-123.2-35.1-124.1-66.5-206.9-24.5-82.7 42-108.5 114.8-300.1 2.5s-244.9 156.8-459.6 37.6c-214.7-119.2-221-181.9-428.1-37.6-207.2 144.3-254.5-21.3-396.7 37.6s-160.4-26.3-247.6-37-92.6 23.8-202.4 15.1c-109.7-8.8-153.2-56.4-333.7-27-180.5 29.5-369.4 32-369.4 32"
        />
        <path
          style={{"--animation-order":37}}
          className="timeline_svg__st0"
          d="M3731.4 623.9s-188.9-122.9-382-65.9c-193.1 57.1-245.5 101-371.5 57.1-125.9-43.9-125.9-74.6-207.8-26.3-81.8 48.3-109.1 118.5-310.6-4.4-201.5-122.9-256 166.8-472.2 52.7-216.2-114.2-222.5-202-428.1-52.7-205.7 149.3-251.8 4.4-384.1 52.7-132.2 48.3-149-39.5-237.2-43.9s-94.4 30.7-201.5 13.2c-107-17.6-149-65.9-327.4-22-178.4 43.9-367.3 26.3-367.3 26.3"
        />
        <path
          style={{"--animation-order":38}}
          className="timeline_svg__st0"
          d="M3728.6 629.1s-188.9-143-384.1-71.5c-195.2 71.5-249.1 114.8-377.8 62.1-128.6-52.7-127.7-82.8-208.7-28.2-80.9 54.6-109.7 122.3-321.1-11.3-211.4-133.6-267.1 176.9-484.8 67.7-217.7-109.1-224-222-428.1-67.7-204.2 154.3-249.1 30.1-371.5 67.7s-137.6-52.7-226.7-50.8c-89 1.9-96.2 37.6-200.6 11.3-104.3-26.3-144.8-75.3-321.1-16.9-176.3 58.3-365.2 20.7-365.2 20.7"
        />
        <path
          style={{"--animation-order":39}}
          className="timeline_svg__st0"
          d="M3725.8 634.3s-188.9-163.1-386.2-77.1c-197.3 85.9-252.7 128.6-384.1 67.1-131.3-61.5-129.5-90.9-209.6-30.1-80.1 60.8-110.3 126.1-331.6-18.2-221.3-144.3-278.2 186.9-497.4 82.8-219.2-104.1-225.5-242.1-428.1-82.8-202.7 159.3-246.4 55.8-358.9 82.8-112.4 27-126.2-65.9-216.2-57.7-89.9 8.2-98 44.5-199.7 9.4-101.6-35.1-140.6-84.7-314.8-11.9C225 671.4 36.1 613.7 36.1 613.7"
        />
        <path
          style={{"--animation-order":40}}
          className="timeline_svg__st0"
          d="M3723 639.6s-188.9-183.1-388.3-82.8c-199.4 100.4-256.3 142.4-390.4 72.1-134-70.2-131.3-99.1-210.5-32-79.2 67.1-110.9 129.8-342.1-25.1-231.2-154.9-289.3 196.9-510 97.8-220.7-99.1-227-262.2-428.1-97.8-201.2 164.3-243.7 81.5-346.3 97.8-102.5 16.3-114.8-79-205.7-64.6-90.8 14.4-99.8 51.4-198.8 7.5-98.9-43.9-136.4-94.1-308.5-6.9-172.1 87.2-361 9.4-361 9.4"
        />
        <path
          style={{"--animation-order":41}}
          className="timeline_svg__st0"
          d="M3720.2 644.8s-188.9-203.2-390.4-88.4c-201.5 114.8-259.9 156.2-396.7 77.1-136.7-79-133.1-107.3-211.4-33.9-78.3 73.4-111.5 133.6-352.6-32-241-165.6-300.4 207-522.6 112.9-222.2-94.1-228.5-282.2-428.1-112.9-199.7 169.3-241 107.3-333.7 112.9S981.4 588.3 889.6 609c-91.7 20.7-101.6 58.3-197.9 5.6-96.2-52.7-132.2-103.5-302.2-1.9s-358.9 3.8-358.9 3.8"
        />
        <path
          style={{"--animation-order":42}}
          className="timeline_svg__st0"
          d="M3717.4 650s-188.9-223.3-392.5-94.1c-203.6 129.2-263.5 170-402.9 82.2-139.4-87.8-134.9-115.4-212.3-35.8-77.4 79.7-112.1 137.4-363.1-38.9-250.9-176.2-311.5 217-535.2 128-223.7-89.1-230-302.3-428.1-128-198.2 174.4-238.4 133-321.1 128-82.7-5-92-105.4-184.7-78.4-92.6 27-103.4 65.2-197 3.8-93.5-61.5-128-112.9-295.9 3.1-167.9 116-356.7-1.9-356.7-1.9"
        />
        <path
          style={{"--animation-order":43}}
          className="timeline_svg__st0"
          d="M3714.6 655.2s-188.9-243.4-394.6-99.7c-205.7 143.6-267.1 183.8-409.2 87.2-142.1-96.6-136.7-123.6-213.2-37.6-76.5 85.9-112.7 141.1-373.6-45.8-260.8-186.9-322.6 227-547.8 143-225.2-84-231.5-322.4-428.1-143-196.7 179.4-235.7 158.7-308.5 143-72.8-15.7-80.6-118.6-174.2-85.3s-105.2 72.1-196.1 1.9c-90.8-70.2-123.8-122.3-289.6 8.2S25 619.6 25 619.6"
        />
        <path
          style={{"--animation-order":44}}
          className="timeline_svg__st0"
          d="M3711.8 660.5s-188.9-263.4-396.7-105.4c-207.8 158.1-270.7 197.6-415.5 92.2-144.8-105.4-138.5-131.7-214.1-39.5-75.6 92.2-113.3 144.9-384.1-52.7-270.7-197.6-333.7 237.1-560.4 158.1s-233-342.5-428.1-158.1c-195.2 184.4-233 184.4-295.9 158.1-63-26.3-69.3-131.7-163.7-92.2-94.4 39.5-107 79-195.2 0-88.1-79-119.6-131.7-283.3 13.2C211.1 779 22.3 620.9 22.3 620.9"
        />
      </g>
      <g>
        <path
          style={{"--animation-order":45}}
          className="timeline_svg__st0"
          d="M81 590.2s188.9-263.4 396.7-105.4C685.5 642.9 748.4 682.4 893.2 577c144.8-105.4 138.5-131.7 214.1-39.5s113.3 144.9 384.1-52.7 333.7 237.1 560.4 158.1 233-342.5 428.1-158.1c195.2 184.4 233 184.4 295.9 158.1 63-26.3 69.3-131.7 163.7-92.2 94.4 39.5 107 79 195.2 0S3254.3 419 3418 563.9c163.7 144.9 352.6-13.2 352.6-13.2"
        />
        <path
          style={{"--animation-order":46}}
          className="timeline_svg__st0"
          d="M3767.7 555.9s-188.9 138-354.7 7.5c-165.8-130.5-198.8-78.4-289.6-8.2-90.8 70.2-102.5 31.4-196.1-1.9-93.5-33.2-101.3 69.6-174.2 85.3-72.9 15.7-111.8 36.4-308.5-143s-203 59-428.1 143c-225.2 84-286.9-329.9-547.8-143s-297.1 131.7-373.6 45.8-71.1-59-213.2 37.6-203.6 56.4-409.2-87.2C267.1 348.3 78.2 591.7 78.2 591.7"
        />
        <path
          style={{"--animation-order":47}}
          className="timeline_svg__st0"
          d="M3764.9 561.2s-188.9 117.9-356.8 1.9-202.4-64.6-295.9-3.1c-93.5 61.5-104.3 23.2-197-3.8-92.6-27-101.9 73.4-184.7 78.4-82.7 5-122.9 46.4-321.1-127.9-198.2-174.4-204.5 38.9-428.1 127.9-223.7 89.1-284.2-304.2-535.2-127.9s-285.7 118.5-363.1 38.9c-77.4-79.7-72.9-52.1-212.3 35.8-139.4 87.8-199.4 47-402.9-82.2-203.5-129.3-392.4 93.9-392.4 93.9"
        />
        <path
          style={{"--animation-order":48}}
          className="timeline_svg__st0"
          d="M3762.1 566.4s-188.9 97.8-358.9-3.8c-170-101.6-206-50.8-302.2 1.9-96.2 52.7-106.1 15.1-197.9-5.6-91.7-20.7-102.5 77.1-195.2 71.5-92.6-5.6-134 56.4-333.7-112.9s-206 18.8-428.1 112.9c-222.2 94.1-281.5-278.5-522.6-112.9s-274.3 105.4-352.6 32c-78.3-73.4-74.7-45.2-211.4 33.9-136.7 79-195.2 37.6-396.7-77.1-201.3-114.9-390.2 88.3-390.2 88.3"
        />
        <path
          style={{"--animation-order":49}}
          className="timeline_svg__st0"
          d="M3759.3 571.6s-188.9 77.8-361-9.4-209.6-37-308.5 6.9-107.9 6.9-198.8-7.5c-90.8-14.4-103.1 80.9-205.7 64.6-102.5-16.3-145.1 66.5-346.3-97.8-201.2-164.3-207.5-1.3-428.1 97.8-220.7 99.1-278.8-252.8-510-97.8s-262.9 92.2-342.1 25.1-76.5-38.3-210.5 32c-134 70.2-191 28.2-390.4-72.1-199.2-100.5-388.1 82.7-388.1 82.7"
        />
        <path
          style={{"--animation-order":50}}
          className="timeline_svg__st0"
          d="M3756.5 576.8s-188.9 57.7-363.1-15.1c-174.2-72.8-213.2-23.2-314.8 11.9s-109.7-1.3-199.7-9.4c-89.9-8.2-103.7 84.7-216.2 57.7-112.4-27-156.2 76.5-358.9-82.8s-209-21.3-428.1 82.8c-219.2 104.1-276.1-227-497.4-82.8s-251.5 79-331.6 18.2c-80-60.8-78.3-31.4-209.6 30.1S650.3 606.2 453 520.3 67 597.5 67 597.5"
        />
        <path
          style={{"--animation-order":51}}
          className="timeline_svg__st0"
          d="M3753.7 582.1s-188.9 37.6-365.2-20.7c-176.3-58.3-216.8-9.4-321.1 16.9-104.3 26.3-111.5-9.4-200.6-11.3-89-1.9-104.3 88.4-226.7 50.8-122.3-37.6-167.3 86.6-371.5-67.7s-210.5-41.4-428.1 67.7c-217.7 109.1-273.4-201.3-484.8-67.7s-240.2 65.9-321.1 11.3-80.1-24.5-208.7 28.2-182.6 9.4-377.8-62.1C253.1 456 64.2 599 64.2 599"
        />
        <path
          style={{"--animation-order":52}}
          className="timeline_svg__st0"
          d="M3750.9 587.3S3562 604.9 3383.6 561c-178.4-43.9-220.4 4.4-327.4 22-107 17.6-113.3-17.6-201.5-13.2-88.1 4.4-104.9 92.2-237.2 43.9s-178.4 96.6-384.1-52.7c-205.7-149.3-212-61.5-428.1 52.7-216.2 114.2-270.7-175.6-472.2-52.7s-228.8 52.7-310.6 4.4c-81.8-48.3-81.8-17.6-207.8 26.3-125.9 43.9-178.4 0-371.5-57.1s-382 65.9-382 65.9"
        />
        <path
          style={{"--animation-order":53}}
          className="timeline_svg__st0"
          d="M3748.1 592.5s-188.9-2.5-369.4-32c-180.5-29.5-224 18.2-333.7 27-109.7 8.8-115.1-25.7-202.4-15.1-87.2 10.7-105.5 96-247.6 37s-189.5 106.6-396.7-37.6c-207.2-144.3-213.5-81.5-428.1 37.6-214.7 119.2-268-149.9-459.6-37.6s-217.4 39.5-300.1-2.5-83.6-10.7-206.9 24.5c-123.2 35.1-174.2-9.4-365.2-52.1S58.5 601.9 58.5 601.9"
        />
        <path
          style={{"--animation-order":54}}
          className="timeline_svg__st0"
          d="M3745.3 597.7s-188.9-22.6-371.5-37.6c-182.6-15.1-227.6 32-340 32s-116.9-33.9-203.3-16.9c-86.3 16.9-106.1 99.7-258.1 30.1-152-69.6-200.6 116.7-409.2-22.6-208.7-139.2-215-101.6-428.1 22.6-213.2 124.2-265.3-124.2-447-22.6s-206 26.3-289.6-9.4-85.4-3.8-206 22.6c-120.5 26.3-170-18.8-358.9-47-188.9-28.2-377.8 54.6-377.8 54.6"
        />
        <path
          style={{"--animation-order":55}}
          className="timeline_svg__st0"
          d="M3742.5 603s-188.9-42.6-373.6-43.3c-184.7-.6-231.2 45.8-346.3 37-115.1-8.8-118.7-42-204.2-18.8-85.4 23.2-106.7 103.5-268.6 23.2-161.9-80.3-211.7 126.7-421.8-7.5-210.2-134.2-216.5-121.7-428.1 7.5-211.7 129.2-262.6-98.5-434.4-7.5s-194.6 13.2-279.1-16.3-87.2 3.1-205.1 20.7c-117.8 17.6-165.8-28.2-352.6-42S53 604.8 53 604.8"
        />
        <path
          style={{"--animation-order":56}}
          className="timeline_svg__st0"
          d="M3739.8 608.2s-188.9-62.7-375.7-48.9c-186.8 13.8-234.8 59.6-352.6 42-117.8-17.6-120.5-50.2-205.1-20.7-84.5 29.5-107.3 107.3-279.1 16.3-171.8-90.9-222.8 136.7-434.4 7.5-211.7-129.2-218-141.7-428.1-7.5-210.2 134.2-259.9-72.8-421.8 7.5s-183.2 0-268.6-23.2c-85.4-23.2-89 10-204.2 18.8-115.1 8.8-161.6-37.6-346.3-37S50.2 606.3 50.2 606.3"
        />
        <path
          style={{"--animation-order":57}}
          className="timeline_svg__st0"
          d="M3737 613.4s-188.9-82.8-377.8-54.6c-188.9 28.2-238.4 73.4-358.9 47-120.5-26.3-122.3-58.3-206-22.6-83.6 35.8-107.9 111-289.6 9.4s-233.9 146.8-447 22.6c-213.2-124.2-219.5-161.8-428.1-22.6-208.7 139.2-257.2-47-409.2 22.6s-171.8-13.2-258.1-30.1S871.5 602 759 602c-112.4 0-157.4-47-340-32-182.6 15.1-371.5 37.6-371.5 37.6"
        />
        <path
          style={{"--animation-order":58}}
          className="timeline_svg__st0"
          d="M3734.2 618.6s-188.9-102.9-379.9-60.2c-191 42.7-241.9 87.2-365.2 52.1-123.2-35.1-124.1-66.5-206.9-24.5-82.7 42-108.5 114.8-300.1 2.5s-244.9 156.8-459.6 37.6c-214.7-119.2-221-181.9-428.1-37.6-207.2 144.3-254.5-21.3-396.7 37.6s-160.4-26.3-247.6-37-92.6 23.8-202.4 15.1c-109.7-8.8-153.2-56.4-333.7-27-180.5 29.5-369.4 32-369.4 32"
        />
        <path
          style={{"--animation-order":59}}
          className="timeline_svg__st0"
          d="M3731.4 623.9s-188.9-122.9-382-65.9c-193.1 57.1-245.5 101-371.5 57.1-125.9-43.9-125.9-74.6-207.8-26.3-81.8 48.3-109.1 118.5-310.6-4.4-201.5-122.9-256 166.8-472.2 52.7-216.2-114.2-222.5-202-428.1-52.7-205.7 149.3-251.8 4.4-384.1 52.7-132.2 48.3-149-39.5-237.2-43.9s-94.4 30.7-201.5 13.2c-107-17.6-149-65.9-327.4-22-178.4 43.9-367.3 26.3-367.3 26.3"
        />
        <path
          style={{"--animation-order":60}}
          className="timeline_svg__st0"
          d="M3728.6 629.1s-188.9-143-384.1-71.5c-195.2 71.5-249.1 114.8-377.8 62.1-128.6-52.7-127.7-82.8-208.7-28.2-80.9 54.6-109.7 122.3-321.1-11.3-211.4-133.6-267.1 176.9-484.8 67.7-217.7-109.1-224-222-428.1-67.7-204.2 154.3-249.1 30.1-371.5 67.7s-137.6-52.7-226.7-50.8c-89 1.9-96.2 37.6-200.6 11.3-104.3-26.3-144.8-75.3-321.1-16.9-176.3 58.3-365.2 20.7-365.2 20.7"
        />
        <path
          style={{"--animation-order":61}}
          className="timeline_svg__st0"
          d="M3725.8 634.3s-188.9-163.1-386.2-77.1c-197.3 85.9-252.7 128.6-384.1 67.1-131.3-61.5-129.5-90.9-209.6-30.1-80.1 60.8-110.3 126.1-331.6-18.2-221.3-144.3-278.2 186.9-497.4 82.8-219.2-104.1-225.5-242.1-428.1-82.8-202.7 159.3-246.4 55.8-358.9 82.8-112.4 27-126.2-65.9-216.2-57.7-89.9 8.2-98 44.5-199.7 9.4-101.6-35.1-140.6-84.7-314.8-11.9C225 671.4 36.1 613.7 36.1 613.7"
        />
        <path
          style={{"--animation-order":62}}
          className="timeline_svg__st0"
          d="M3723 639.6s-188.9-183.1-388.3-82.8c-199.4 100.4-256.3 142.4-390.4 72.1-134-70.2-131.3-99.1-210.5-32-79.2 67.1-110.9 129.8-342.1-25.1-231.2-154.9-289.3 196.9-510 97.8-220.7-99.1-227-262.2-428.1-97.8-201.2 164.3-243.7 81.5-346.3 97.8-102.5 16.3-114.8-79-205.7-64.6-90.8 14.4-99.8 51.4-198.8 7.5-98.9-43.9-136.4-94.1-308.5-6.9-172.1 87.2-361 9.4-361 9.4"
        />
        <path
          style={{"--animation-order":63}}
          className="timeline_svg__st0"
          d="M3720.2 644.8s-188.9-203.2-390.4-88.4c-201.5 114.8-259.9 156.2-396.7 77.1-136.7-79-133.1-107.3-211.4-33.9-78.3 73.4-111.5 133.6-352.6-32-241-165.6-300.4 207-522.6 112.9-222.2-94.1-228.5-282.2-428.1-112.9-199.7 169.3-241 107.3-333.7 112.9S981.4 588.3 889.6 609c-91.7 20.7-101.6 58.3-197.9 5.6-96.2-52.7-132.2-103.5-302.2-1.9s-358.9 3.8-358.9 3.8"
        />
        <path
          style={{"--animation-order":64}}
          className="timeline_svg__st0"
          d="M3717.4 650s-188.9-223.3-392.5-94.1c-203.6 129.2-263.5 170-402.9 82.2-139.4-87.8-134.9-115.4-212.3-35.8-77.4 79.7-112.1 137.4-363.1-38.9-250.9-176.2-311.5 217-535.2 128-223.7-89.1-230-302.3-428.1-128-198.2 174.4-238.4 133-321.1 128-82.7-5-92-105.4-184.7-78.4-92.6 27-103.4 65.2-197 3.8-93.5-61.5-128-112.9-295.9 3.1-167.9 116-356.7-1.9-356.7-1.9"
        />
        <path
          style={{"--animation-order":65}}
          className="timeline_svg__st0"
          d="M3714.6 655.2s-188.9-243.4-394.6-99.7c-205.7 143.6-267.1 183.8-409.2 87.2-142.1-96.6-136.7-123.6-213.2-37.6-76.5 85.9-112.7 141.1-373.6-45.8-260.8-186.9-322.6 227-547.8 143-225.2-84-231.5-322.4-428.1-143-196.7 179.4-235.7 158.7-308.5 143-72.8-15.7-80.6-118.6-174.2-85.3s-105.2 72.1-196.1 1.9c-90.8-70.2-123.8-122.3-289.6 8.2S25 619.6 25 619.6"
        />
        <path
          style={{"--animation-order":66}}
          className="timeline_svg__st0"
          d="M3711.8 660.5s-188.9-263.4-396.7-105.4c-207.8 158.1-270.7 197.6-415.5 92.2-144.8-105.4-138.5-131.7-214.1-39.5-75.6 92.2-113.3 144.9-384.1-52.7-270.7-197.6-333.7 237.1-560.4 158.1s-233-342.5-428.1-158.1c-195.2 184.4-233 184.4-295.9 158.1-63-26.3-69.3-131.7-163.7-92.2-94.4 39.5-107 79-195.2 0-88.1-79-119.6-131.7-283.3 13.2C211.1 779 22.3 620.9 22.3 620.9"
        />
      </g>
    </svg>
    </Time>
  );
}

export default SvgTimeline;

