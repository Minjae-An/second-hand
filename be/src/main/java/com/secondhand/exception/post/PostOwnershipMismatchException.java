package com.secondhand.exception.post;

public class PostOwnershipMismatchException extends PostAuthorizationException {

        public PostOwnershipMismatchException() {

            super("상품 수정 권한 없음");
        }
}
