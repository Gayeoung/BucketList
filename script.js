
// 페이지 로드 시 이전 상태 복원
document.addEventListener("DOMContentLoaded", (event) => {
    const buckets = document.querySelectorAll(".bucket");
    buckets.forEach((bucket, index) => {
        // 로컬 스토리지에서 상태 읽기
        const isDone = localStorage.getItem("bucket" + index) === "done";

        if (isDone) {
            bucket.classList.add("done");
        }
    });
});

// 버킷 리스트 클릭 이벤트
const buckets = document.querySelectorAll(".bucket");
buckets.forEach((bucket, index) => {
bucket.addEventListener("click", function () {
    // 클래스 토글
    bucket.classList.toggle("done");

    // 로컬 스토리지에 상태 저장
    if (bucket.classList.contains("done")) {
    localStorage.setItem("bucket" + index, "done");
    } else {
    localStorage.setItem("bucket" + index, "");
    }
});
});

document.querySelectorAll('.bucket').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.add('animate__animated', 'animate__bounce');
        this.addEventListener('animationend', function() {
            this.classList.remove('animate__animated', 'animate__bounce');
        }, { once: true });
    });
});
// Select the h1 element with the class 'tit'
const title = document.querySelector('.tit');

// Add a click event listener to the h1 element
title.addEventListener('click', function() {
    // Remove the animation classes to reset the animation
    this.classList.remove('animate__animated', 'animate__bounce');
    
    // Use a timeout to ensure the classes are removed before adding them again
    setTimeout(() => {
        this.classList.add('animate__animated', 'animate__bounce');
    }, 10); // Small delay to re-trigger the animation
});
