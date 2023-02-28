/**
 * 게시글 정책
 * - 제목 : 40자
 * - 내용 : 2000자
 * - 작성자 : 10자
 * - 비밀번호 : 16자
 */
export const enum postPolicy {
  title = 40,
  content = 2000,
  writer = 10,
  password = 16,
}

/**
 * 댓글 정책
 * - 내용 : 500자
 * - 작성자 : 10자
 * - 비밀번호 : 16자
 */
export const enum commentPolicy {
  content = 500,
  writer = 10,
  password = 16,
}
