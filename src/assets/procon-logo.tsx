import { useTheme } from "@hooks/useTheme";
import { useMemo } from "react";

interface ProconLogoProps {
  width?: string;
  height?: string;
}

export const ProconLogo = ({
  height = "58",
  width = "228",
}: ProconLogoProps) => {
  const { theme } = useTheme();

  const colorTheme = useMemo(() => {
    return theme === "light" ? "black" : "white";
  }, [theme]);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 228 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Logo Procon"
        clip-path="url(#clip0_24_415)"
      >
        <path
          id="Vector"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.00871 0.153517C5.52166 0.222372 3.60471 0.289064 2.7489 0.301861L1.19299 0.325113L1.07582 7.67024C0.841321 22.3897 0.841322 22.5981 1.07546 37.299L1.19209 44.6221L4.05533 44.7518C5.63016 44.8231 8.20664 44.8232 9.78092 44.7519L12.643 44.6221L12.9076 32.6289L17.3484 32.5183C19.7908 32.4573 22.696 32.326 23.8045 32.2261C29.8635 31.6801 34.5121 28.7436 36.8458 23.988C39.0529 19.4901 39.1688 13.1138 37.1233 8.70667C35.3491 4.88379 31.8479 2.15374 27.1435 0.924801C25.6001 0.521585 24.7609 0.442276 20.0173 0.251031C17.0601 0.131706 14.14 0.0940349 13.5282 0.167216C12.9167 0.240397 11.8484 0.227239 11.1544 0.138016C10.4605 0.0487927 9.85212 -0.0123118 9.80255 0.00210811C9.75299 0.0167083 8.49576 0.0848423 7.00871 0.153517ZM89.5625 0.271579C87.7905 0.392706 84.6244 0.878657 83.2302 1.24349C80.6986 1.90589 77.0623 3.64763 74.8941 5.23617C64.5058 12.8477 61.3533 26.6667 67.4214 37.9916C69.938 42.6886 73.7291 46.3368 78.5673 48.7172C82.4898 50.6471 85.5778 51.3612 90.1032 51.3846C94.0478 51.4052 97.3008 50.7022 100.777 49.0779C108.433 45.5003 113.916 38.2377 115.266 29.8859C115.607 27.7728 115.568 23.5421 115.186 21.4142C113.95 14.5159 109.66 8.12375 103.715 4.31744C102.171 3.32896 98.9176 1.85668 97.1273 1.33595C95.7811 0.944268 90.8675 0.081057 90.5539 0.181095C89.5625 0.271579 90.0582 0.237512 89.5625 0.271579ZM22.42 9.89235C25.1078 10.4646 26.641 12.0225 27.2122 14.7622C27.4376 15.8427 27.4497 16.3094 27.2804 17.3504C26.7519 20.5984 24.9448 22.4221 21.816 22.8652C20.4327 23.0611 16.3894 23.1578 14.3719 23.0431L12.9029 22.9596L12.7727 19.6634C12.7012 17.8505 12.7016 14.8705 12.7739 13.0411L12.9052 9.7148L13.9225 9.63712C15.6929 9.50157 21.3882 9.67263 22.42 9.89235ZM59.8215 10.1454C56.7716 10.8179 54.1398 12.4908 52.3016 14.9253L51.8252 15.5561L51.8311 14.5455C51.8343 13.9897 51.7796 12.8432 51.7091 11.9979L51.5811 10.4609L48.8067 10.3309C47.2809 10.2593 44.7844 10.2593 43.2588 10.3309L40.4854 10.4609L40.368 16.1629C40.1421 27.1503 40.1421 27.9347 40.368 38.9201L40.4851 44.6197L43.2588 44.7489C44.7843 44.8196 47.2799 44.8196 48.8048 44.7489L51.5769 44.62L51.7045 39.0105C51.7748 35.9251 51.8185 32.3058 51.8017 30.9674C51.755 27.2603 51.7799 26.8092 52.0883 25.746C52.6864 23.6835 54.4153 21.8779 56.5606 21.0753C57.8047 20.61 61.0373 20.1385 61.6939 20.3269C62.7046 20.6168 62.7055 20.6117 62.7055 15.1957C62.7055 9.69948 62.7439 9.87325 61.5339 9.89541C61.1868 9.90172 60.4164 10.0142 59.8215 10.1454ZM134.354 10.0719C127.355 10.6847 122.01 14.5698 119.691 20.7297C118.794 23.1103 118.287 26.8179 118.534 29.1847C119.16 35.1762 121.403 39.2489 125.632 42.0687C131.502 45.9833 140.383 46.0774 146.743 42.2926C148.612 41.1802 151.865 37.5324 151.6 36.844C151.551 36.7156 150.185 35.8566 148.566 34.9348C146.945 34.0131 145.142 32.9845 144.558 32.6492C143.974 32.314 143.484 32.0621 143.47 32.0894C143.455 32.1167 143.108 32.5923 142.699 33.1462C140.026 36.7737 133.936 36.8046 131.458 33.2031C130.421 31.6947 129.984 30.0887 129.967 27.7228C129.951 25.2972 130.318 23.9402 131.473 22.1538C133.868 18.4468 139.652 18.3976 142.781 22.0576L143.489 22.8863L146.087 21.3728C147.515 20.5404 149.311 19.4994 150.078 19.0596C150.846 18.6196 151.475 18.1527 151.476 18.0219C151.478 17.7439 150.712 16.5989 149.765 15.4658C148.508 13.9606 145.891 12.1936 143.547 11.2675C141.12 10.3084 137.311 9.81304 134.354 10.0719ZM167.312 10.0657C158.89 10.8242 152.996 15.5372 151.186 22.9594C150.781 24.6259 150.707 25.3314 150.705 27.5427C150.702 29.7983 150.77 30.4278 151.198 32.139C153.085 39.6926 158.881 44.2347 167.61 45.0005C169.611 45.176 172.264 44.9731 174.635 44.4628C181.086 43.0754 185.77 38.7781 187.542 32.6222C188.657 28.7469 188.171 22.8315 186.46 19.468C185.829 18.2265 184.368 16.1443 183.537 15.3036C179.853 11.5746 173.464 9.51185 167.312 10.0657ZM211.957 10.0621C208.717 10.4605 205.553 12.1743 203.75 14.5068L202.938 15.5561L202.82 14.6549C202.754 14.1592 202.693 13.015 202.684 12.1123L202.668 10.4708L199.875 10.3769C198.338 10.3253 195.837 10.3248 194.316 10.376L191.551 10.4688L191.431 16.6921C191.281 24.5653 191.281 30.5204 191.431 38.3947L191.551 44.619L194.18 44.7034C195.627 44.7499 198.116 44.7501 199.711 44.7041L202.612 44.6203L202.718 35.0356C202.818 25.9917 202.843 25.3968 203.188 24.4905C204.263 21.6625 206.546 20.0717 209.518 20.0795C211.965 20.086 213.94 21.3765 214.73 23.4865C215.118 24.5273 215.131 24.8045 215.235 34.5871L215.343 44.6203L218.153 44.7001C219.699 44.7441 222.2 44.7444 223.713 44.7008L226.461 44.6216L226.505 40.0025C226.594 30.5502 226.447 21.5765 226.174 19.9058C225.397 15.1481 222.152 11.5243 217.622 10.3554C216.298 10.014 213.519 9.87017 211.957 10.0621ZM91.6987 16.557C93.4607 17.0588 94.7888 19.4335 94.356 21.308C94.0085 22.8144 93.3952 23.6637 92.2509 24.2234C89.2395 25.6969 86.1475 23.976 85.9079 20.6932C85.8476 19.867 85.9207 19.54 86.3472 18.7299C86.6285 18.1953 87.153 17.5199 87.5126 17.2291C88.7689 16.2133 89.8705 16.0365 91.6987 16.557ZM82.3949 17.2013C83.2393 17.8743 83.7645 18.9037 83.7645 19.885C83.7645 22.6953 80.4546 24.2106 78.3155 22.3796C77.2867 21.4991 76.9168 20.2563 77.2997 18.9668C77.77 17.3833 79.0428 16.4907 80.6826 16.5947C81.5012 16.6466 81.8572 16.7728 82.3949 17.2013ZM101.562 17.1171C103.637 18.2835 103.531 21.6726 101.387 22.7106C98.4783 24.1188 95.7572 21.5456 96.924 18.4902C97.5865 16.7556 99.7689 16.1095 101.562 17.1171ZM171.123 19.3518C174.16 20.0675 176.046 22.2817 176.646 25.8346C176.922 27.4644 176.922 27.7332 176.654 29.3668C176.305 31.4948 175.604 32.9954 174.4 34.1951C172.965 35.6263 170.952 36.3231 168.782 36.1411C165.884 35.8983 163.762 34.2286 162.611 31.2884C162.146 30.101 161.965 26.6923 162.284 25.1537C162.756 22.8807 164.27 20.8027 166.112 19.9018C167.802 19.0752 169.266 18.9144 171.123 19.3518ZM79.018 23.8475C79.9837 24.1882 80.9277 24.1913 81.8765 23.8566C82.8082 23.5278 84.3676 23.7436 85.1655 24.3117C85.7892 24.7558 85.722 24.8717 84.668 25.1711C83.5332 25.4934 82.2448 26.4507 81.6545 27.41C81.2134 28.1266 81.1081 28.5289 81.0183 29.8433L80.9106 31.418L78.9013 31.4688C76.4527 31.5307 76.3143 31.446 76.3143 29.8837C76.3143 29.3017 76.2331 28.7755 76.134 28.7143C76.0212 28.6445 75.9527 29.0284 75.9511 29.7401C75.9474 31.2327 75.8483 31.3625 74.7646 31.2938L73.8808 31.2378L73.826 29.1648C73.7557 26.521 73.8807 25.6949 74.4541 25.0135C75.1821 24.1482 75.9984 23.8272 78.0489 23.5997C78.1605 23.5873 78.5966 23.6988 79.018 23.8475ZM98.8831 24.0671C99.8597 24.3385 99.9693 24.3346 101.025 23.9885C102.059 23.6493 102.208 23.6423 103.15 23.8878C104.518 24.2445 105.127 24.6289 105.512 25.3796C105.912 26.1587 106.138 28.3983 105.966 29.881C105.853 30.8557 105.78 31.0126 105.367 31.1692C105.109 31.2675 104.712 31.3012 104.485 31.2443C104.15 31.1603 104.071 31.0145 104.062 30.4682C104.047 29.4805 103.812 28.3241 103.671 28.5471C103.605 28.6535 103.469 29.2422 103.37 29.8554C103.272 30.4684 103.146 31.0425 103.091 31.1313C102.94 31.376 100.949 31.5586 99.9427 31.4201L99.051 31.2976L98.9378 30.0961C98.8756 29.4352 98.6937 28.5309 98.5338 28.0866C98.1207 26.94 96.7616 25.6738 95.4173 25.1837C94.8243 24.9675 94.3391 24.7335 94.3391 24.6636C94.3391 24.3323 97.0158 23.54 97.5836 23.7032C97.7323 23.7459 98.3172 23.9096 98.8831 24.0671ZM88.1713 25.6641C89.527 26.2397 90.5259 26.2807 91.9959 25.8216C93.2641 25.4255 93.4134 25.4148 94.4092 25.6495C95.9262 26.007 96.9933 26.7312 97.6047 27.8188C98.0603 28.6291 98.1239 28.9461 98.2014 30.7929C98.2492 31.9297 98.2312 33.3466 98.1613 33.9415L98.0342 35.023L96.9894 35.1798C96.4149 35.2661 95.9121 35.3041 95.8722 35.2645C95.8327 35.2247 95.7434 34.4418 95.6742 33.5247C95.5639 32.0653 95.3908 31.4776 95.1441 31.7246C95.1042 31.7644 94.9854 32.5591 94.8798 33.4908C94.7742 34.4225 94.6702 35.2019 94.6488 35.2231C94.6271 35.2442 93.5193 35.3535 92.1869 35.4664C89.416 35.7011 85.6095 35.5504 85.2509 35.1918C85.1216 35.0624 84.9736 34.2789 84.911 33.3928C84.8501 32.5294 84.7565 31.779 84.7031 31.7255C84.4639 31.4865 84.3286 32.0181 84.2266 33.5995C84.1661 34.5358 84.0845 35.3321 84.0457 35.3692C83.9514 35.459 81.8517 35.1232 81.7282 34.9986C81.675 34.9451 81.632 33.4617 81.6323 31.7025L81.633 28.5035L82.173 27.6368C83.2628 25.8873 86.3249 24.8804 88.1713 25.6641ZM162.708 49.208C162.164 49.4708 161.868 50.3374 162.223 50.6318C162.436 50.8082 162.584 50.7803 162.976 50.49C163.461 50.1321 163.472 50.1321 164.134 50.476C164.954 50.9014 165.426 50.7767 165.725 50.0559C165.918 49.5898 165.908 49.4661 165.658 49.2159C165.387 48.9448 165.333 48.9515 164.955 49.3031C164.55 49.68 164.54 49.6806 163.915 49.3457C163.185 48.954 163.225 48.9585 162.708 49.208ZM146.671 49.4704C146.358 49.5162 146.056 49.6705 146.001 49.8136C145.783 50.3846 146.087 50.5736 147.426 50.6992C148.897 50.8369 148.851 50.7911 149.038 52.3268C149.163 53.3613 148.868 55.9615 148.588 56.2997C148.225 56.7373 147.507 56.7721 146.718 56.3902C145.779 55.9359 145.583 55.9309 145.447 56.357C145.27 56.917 145.515 57.2328 146.432 57.6275C147.51 58.0914 147.928 58.0944 148.916 57.646C150.112 57.1031 150.267 56.5603 150.287 52.8364C150.296 51.1337 150.256 49.6925 150.197 49.6334C150.052 49.489 147.388 49.3661 146.671 49.4704ZM182.906 49.4701C182.353 49.551 182.338 49.5798 182.213 50.7478C182.059 52.1777 182.091 55.9677 182.266 57.1034C182.375 57.8152 182.446 57.9145 182.841 57.9145C183.261 57.9145 183.302 57.8334 183.447 56.7114L183.601 55.5082L184.978 55.3978C185.737 55.337 186.721 55.1483 187.167 54.9783C187.845 54.7198 188.055 54.5165 188.452 53.734C188.869 52.9135 188.907 52.6942 188.768 51.9443C188.552 50.7919 188.184 50.2848 187.268 49.8796C186.488 49.535 184.037 49.3048 182.906 49.4701ZM186.831 50.9876C187.032 51.0957 187.313 51.4617 187.455 51.8005C187.678 52.3348 187.678 52.4992 187.455 53.0335C187.313 53.3723 187.049 53.728 186.866 53.8234C186.326 54.1079 185.055 54.2596 184.292 54.1307C183.613 54.0161 183.574 53.9734 183.461 53.2136C183.395 52.7755 183.395 52.057 183.461 51.6172C183.555 50.9908 183.667 50.7984 183.977 50.73C184.574 50.5984 186.413 50.7644 186.831 50.9876ZM154.859 51.586C153.793 51.9759 153.315 52.3655 152.894 53.1858C152.102 54.7288 152.623 56.6654 154.047 57.4706C155.607 58.3536 157.923 57.8298 158.753 56.4064C159.25 55.5529 159.239 53.9979 158.729 53.0217C158.094 51.8044 156.191 51.0989 154.859 51.586ZM162.861 51.6738C161.594 52.12 161.301 52.4047 161.64 52.8673C161.886 53.2037 161.907 53.2041 162.633 52.8767C163.452 52.5074 164.238 52.4683 164.801 52.7692C165.217 52.9919 165.6 53.6108 165.462 53.8355C165.411 53.9175 164.692 54.0326 163.864 54.0911C161.98 54.224 161.462 54.4509 161.194 55.2605C160.853 56.2954 161.234 57.2294 162.169 57.6541C163.114 58.0836 163.629 58.0853 164.561 57.6622C165.284 57.3342 165.302 57.3345 165.517 57.6776C165.65 57.891 165.889 58.0053 166.13 57.971C166.653 57.8963 166.851 56.6937 166.699 54.5093C166.565 52.5889 166.409 52.1949 165.628 51.8227C164.633 51.3482 163.901 51.3088 162.861 51.6738ZM171.121 51.6062C169.687 52.0582 168.897 53.1435 168.89 54.6701C168.882 56.556 170.27 57.9084 172.206 57.8994C174.183 57.8904 175.526 56.5838 175.526 54.6701C175.526 52.4051 173.362 50.8996 171.121 51.6062ZM192.686 51.5583C191.176 51.957 190.054 53.8081 190.399 55.335C190.772 56.9924 191.989 57.9266 193.742 57.9015C194.747 57.8871 196.179 57.2613 196.179 56.8357C196.179 56.3699 195.561 56.1865 195.094 56.5137C194.575 56.8772 193.15 56.9185 192.532 56.5879C192.063 56.3375 191.584 55.5545 191.815 55.4188C191.886 55.3774 192.975 55.2854 194.235 55.2144C197.041 55.0561 197.109 54.9763 196.225 52.8992C195.754 51.7911 194.132 51.1766 192.686 51.5583ZM200.135 51.5063C199.23 51.7809 198.893 52.0719 198.688 52.7563C198.522 53.3079 198.53 53.5558 198.726 53.9637C198.999 54.5306 199.381 54.7674 200.894 55.3096C201.946 55.6865 202.283 56.0688 201.933 56.4906C201.573 56.9242 200.576 56.985 199.597 56.6329C198.802 56.3468 198.661 56.3384 198.515 56.5684C198.219 57.0357 198.327 57.2219 199.088 57.5652C200.084 58.014 201.515 58.0046 202.304 57.5445C203.697 56.7306 203.526 55.0886 201.98 54.4395C201.516 54.2447 200.919 54.0343 200.653 53.9718C200.044 53.8289 199.59 53.3845 199.717 53.0552C199.916 52.535 200.826 52.4031 201.761 52.7585L202.632 53.0896L202.814 52.6916C203.067 52.1357 202.861 51.8985 201.857 51.5968C200.9 51.3087 200.803 51.3036 200.135 51.5063ZM206.364 51.6111C205.967 51.7539 205.625 51.8721 205.602 51.8735C205.473 51.8822 205.011 52.9977 205.011 53.3007C205.011 54.276 205.447 54.6425 207.425 55.3282C208.676 55.7618 208.79 56.6263 207.626 56.8448C207.166 56.9309 206.694 56.8583 206.009 56.5962C205.007 56.2127 204.831 56.2729 204.831 57.0007C204.831 57.3791 206.277 57.9157 207.26 57.9021C209.025 57.878 209.961 56.8902 209.543 55.4938C209.369 54.9134 209.201 54.747 208.481 54.4446C208.01 54.2471 207.408 54.0343 207.142 53.9718C206.533 53.8289 206.078 53.3845 206.206 53.0552C206.397 52.5554 207.24 52.4332 208.215 52.7635C209.121 53.0702 209.13 53.0694 209.307 52.6834C209.556 52.136 209.345 51.8975 208.346 51.5968C207.302 51.2827 207.274 51.2828 206.364 51.6111ZM213.749 51.5809C212.644 51.9362 212.125 52.3517 211.752 53.1817C211.022 54.8011 211.585 56.7644 212.99 57.4967C214.614 58.3435 216.797 57.8421 217.562 56.4461C218.142 55.388 218.214 54.8265 217.907 53.7672C217.392 51.9954 215.522 51.0117 213.749 51.5809ZM222.084 51.5304C221.168 51.7486 220.332 52.1962 220.336 52.4667C220.343 53.0968 220.618 53.1676 221.675 52.811C222.494 52.5347 222.836 52.4996 223.307 52.6443C223.87 52.8175 224.411 53.5305 224.216 53.8452C224.17 53.922 223.44 54.0334 222.597 54.0929C220.779 54.2213 220.39 54.397 220.033 55.253C219.792 55.8294 219.794 55.9761 220.053 56.6535C220.486 57.7875 221.796 58.2437 223.216 57.7544C223.935 57.5068 224.047 57.507 224.324 57.7577C224.855 58.2383 225.265 57.9961 225.432 57.1018C225.641 55.9833 225.448 53.0709 225.123 52.4427C224.711 51.648 223.331 51.2336 222.084 51.5304ZM156.51 52.7026C157.292 53.0154 157.674 53.4755 157.862 54.3317C158.037 55.1277 157.532 56.3 156.918 56.5294C155.893 56.9108 155.747 56.9149 154.998 56.5832C154.356 56.2996 154.18 56.108 153.961 55.4558C153.729 54.7652 153.73 54.5749 153.963 53.8847C154.18 53.2448 154.367 53.0366 154.971 52.7621C155.868 52.3547 155.661 52.3627 156.51 52.7026ZM172.929 52.709C174.08 53.1693 174.523 54.2993 174.052 55.5706C173.626 56.7181 172.47 57.1194 171.155 56.5755C170.481 56.2963 169.979 55.06 170.217 54.2672C170.455 53.4745 170.653 53.0895 171.378 52.7603C172.27 52.3547 172.846 52.6755 172.929 52.709ZM215.47 52.7097C216.666 53.1882 217.113 54.5728 216.473 55.8105C215.984 56.7578 214.879 57.0661 213.71 56.5819C212.258 55.9804 212.397 53.4504 213.92 52.7585C214.809 52.3551 214.6 52.3618 215.47 52.7097ZM194.723 52.8604C195.196 53.1051 195.57 53.8075 195.346 54.0313C195.165 54.2113 192.053 54.1307 191.864 53.9412C191.625 53.7029 192.096 52.9951 192.639 52.7761C193.24 52.5336 194.164 52.5711 194.723 52.8604ZM165.411 55.2827C165.65 55.5221 165.161 56.3456 164.657 56.5488C163.654 56.9545 162.74 56.8615 162.382 56.3177C161.989 55.7161 162.208 55.3432 163.075 55.1396C163.858 54.9557 165.163 55.0357 165.411 55.2827ZM224.135 55.3294C224.39 55.7415 224.039 56.2576 223.273 56.5962C222.614 56.8877 222.38 56.9127 221.874 56.7458C220.889 56.4208 220.802 55.4018 221.742 55.1955C222.007 55.1369 222.307 55.0585 222.405 55.021C222.723 54.9009 224.013 55.1307 224.135 55.3294Z"
          fill={colorTheme}
        />
        <path
          id="Vector_2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M90.8835 0.187001C90.7096 0.171231 90.594 0.168273 90.5539 0.181071C89.5625 0.271556 90.0582 0.237489 89.5625 0.271556C87.7905 0.392683 84.6244 0.878634 83.2302 1.24346C80.6986 1.90587 77.0622 3.64761 74.8941 5.23615C64.5058 12.8477 61.3533 26.6666 67.4214 37.9916C69.938 42.6886 73.7291 46.3368 78.5673 48.7172C82.4898 50.6471 85.5778 51.3612 90.1032 51.3846C90.3663 51.386 90.6264 51.3841 90.8835 51.379V35.5466C88.3504 35.6511 85.5555 35.4964 85.2509 35.1918C85.1216 35.0624 84.9736 34.2789 84.911 33.3928C84.8501 32.5294 84.7565 31.779 84.7031 31.7255C84.4639 31.4864 84.3286 32.0181 84.2266 33.5995C84.1661 34.5357 84.0845 35.3321 84.0457 35.3692C83.9514 35.459 81.8517 35.1232 81.7282 34.9986C81.675 34.9451 81.632 33.4617 81.6323 31.7024L81.633 28.5035L82.173 27.6367C83.2628 25.8872 86.3249 24.8804 88.1713 25.664C89.158 26.0829 89.9558 26.2188 90.8835 26.0847V24.6794C88.3661 25.1382 86.1112 23.4776 85.9079 20.6932C85.8476 19.8669 85.9207 19.5399 86.3472 18.7299C86.6285 18.1953 87.153 17.5199 87.5126 17.2291C88.5705 16.3736 89.5188 16.1132 90.8835 16.3632V0.187001ZM83.7645 19.8849C83.7645 18.9037 83.2393 17.8743 82.3949 17.2013C81.8572 16.7728 81.5012 16.6466 80.6826 16.5947C79.0428 16.4907 77.77 17.3833 77.2997 18.9668C76.9168 20.2562 77.2867 21.4991 78.3155 22.3796C80.4546 24.2106 83.7645 22.6953 83.7645 19.8849ZM81.8765 23.8565C80.9277 24.1913 79.9837 24.1882 79.018 23.8475C78.5966 23.6988 78.1605 23.5873 78.0489 23.5997C75.9984 23.8272 75.1821 24.1482 74.4541 25.0135C73.8807 25.6949 73.7557 26.5209 73.826 29.1648L73.8808 31.2377L74.7646 31.2938C75.8483 31.3624 75.9474 31.2326 75.9511 29.7401C75.9527 29.0284 76.0212 28.6444 76.134 28.7143C76.2331 28.7755 76.3143 29.3017 76.3143 29.8837C76.3143 31.446 76.4527 31.5306 78.9013 31.4688L80.9105 31.418L81.0183 29.8433C81.1081 28.5289 81.2134 28.1266 81.6545 27.41C82.2448 26.4506 83.5332 25.4934 84.668 25.171C85.722 24.8717 85.7892 24.7558 85.1655 24.3117C84.3676 23.7436 82.8082 23.5278 81.8765 23.8565Z"
          fill={colorTheme}
        />
        <path
          id="Vector_3"
          d="M119.691 20.7297C122.01 14.5698 127.355 10.6847 134.354 10.0719C137.311 9.81303 141.12 10.3084 143.547 11.2675C145.891 12.1936 148.508 13.9606 149.765 15.4658C150.712 16.5989 151.478 17.7439 151.476 18.0219C151.475 18.1527 150.846 18.6196 150.078 19.0596C149.311 19.4994 147.515 20.5403 146.087 21.3728L143.489 22.8863L142.781 22.0576C139.652 18.3976 133.868 18.4468 131.473 22.1538C130.318 23.9402 129.951 25.2972 129.967 27.7228C129.984 30.0886 130.421 31.6947 131.458 33.2031C133.936 36.8046 140.026 36.7737 142.699 33.1462C143.108 32.5923 143.455 32.1167 143.47 32.0894C143.484 32.062 143.974 32.314 144.558 32.6492C145.142 32.9845 146.945 34.013 148.566 34.9348C150.185 35.8566 151.551 36.7156 151.6 36.844C151.865 37.5324 148.612 41.1802 146.743 42.2925C140.383 46.0774 131.502 45.9833 125.632 42.0687C121.403 39.2489 119.16 35.1762 118.534 29.1847C118.287 26.8179 118.794 23.1103 119.691 20.7297Z"
          fill={colorTheme}
        />
        <path
          id="Vector_4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M151.186 22.9594C152.995 15.5372 158.889 10.8242 167.312 10.0658C173.464 9.51185 179.853 11.5746 183.537 15.3037C184.368 16.1443 185.829 18.2265 186.46 19.4681C188.171 22.8315 188.657 28.7469 187.541 32.6222C185.77 38.7781 181.086 43.0754 174.635 44.4628C172.264 44.9731 169.611 45.176 167.61 45.0005C158.881 44.2347 153.085 39.6926 151.197 32.139C150.769 30.4278 150.702 29.7983 150.704 27.5427C150.707 25.3314 150.781 24.6259 151.186 22.9594ZM176.645 25.8346C176.046 22.2817 174.16 20.0675 171.123 19.3518C169.266 18.9144 167.802 19.0752 166.112 19.9018C164.269 20.8027 162.756 22.8807 162.284 25.1537C161.965 26.6923 162.145 30.101 162.611 31.2884C163.761 34.2286 165.884 35.8983 168.782 36.1411C170.952 36.3231 172.965 35.6263 174.4 34.1951C175.604 32.9954 176.304 31.4948 176.654 29.3668C176.922 27.7332 176.922 27.4644 176.645 25.8346Z"
          fill={colorTheme}
        />
        <path
          id="Vector_5"
          d="M203.75 14.5068C205.553 12.1743 208.717 10.4605 211.957 10.0621C213.519 9.87018 216.298 10.014 217.622 10.3554C222.153 11.5243 225.397 15.1481 226.174 19.9058C226.447 21.5765 226.594 30.5502 226.505 40.0025L226.461 44.6216L223.713 44.7008C222.2 44.7444 219.699 44.7441 218.153 44.7001L215.343 44.6203L215.235 34.5871C215.131 24.8045 215.118 24.5273 214.73 23.4865C213.94 21.3765 211.965 20.086 209.518 20.0795C206.546 20.0717 204.263 21.6625 203.188 24.4905C202.843 25.3968 202.818 25.9917 202.718 35.0356L202.612 44.6203L199.711 44.7041C198.116 44.7501 195.627 44.7499 194.18 44.7034L191.551 44.6191L191.431 38.3947C191.281 30.5204 191.281 24.5653 191.431 16.6921L191.551 10.4688L194.316 10.376C195.837 10.3248 198.338 10.3253 199.875 10.3769L202.668 10.4708L202.684 12.1123C202.694 13.015 202.754 14.1592 202.82 14.6549L202.938 15.5561L203.75 14.5068Z"
          fill={colorTheme}
        />
      </g>
      <defs>
        <clipPath id="clip0_24_415">
          <rect
            width="226.2"
            height="58"
            fill="white"
            transform="translate(0.899902)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
