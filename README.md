# Study Mate - 스터디 매칭 플랫폼

Study Mate는 개발자, 디자이너, 기획자 등 다양한 분야의 전문가들이 스터디 그룹을 만들고 참여할 수 있는 매칭 플랫폼입니다.

## 프로젝트 개요

이 프로젝트는 스터디 매칭 서비스의 MVP(Minimum Viable Product)를 개발하는 것을 목표로 합니다.

### 사용 기술

- **백엔드**: NestJS
- **ORM**: Prisma
- **데이터베이스**: PostgreSQL
- **패키지 관리**: pnpm
- **인증**: JWT

## 시작하기

### 필수 조건

- Node.js 16+
- pnpm
- PostgreSQL (로컬 또는 Docker)

### 설치 방법

1. 저장소 클론

```bash
git clone <repository-url>
cd backend
```

2. 의존성 설치

```bash
pnpm install
```

3. 환경 설정

`.env` 파일을 생성하고 다음 내용을 추가합니다:

```
DATABASE_URL="postgresql://postgres:1234@localhost:5432/study_mate"
JWT_SECRET="your_jwt_secret"
```

4. 데이터베이스 마이그레이션

```bash
pnpm prisma migrate dev --name init
```

5. 서버 실행

```bash
pnpm start:dev
```

## 기능

### 인증 시스템

- 회원가입 및 로그인 기능
- JWT 기반 인증
- 비밀번호 암호화 (bcrypt)
- 인증된 사용자만 접근 가능한 API

| 메소드 | 경로         | 설명                |
| ------ | ------------ | ------------------- |
| POST   | /auth/signup | 회원가입            |
| POST   | /auth/login  | 로그인 및 토큰 발급 |

### 스터디 관리

- 스터디 그룹 생성 (인증 필요)
- 전체 스터디 목록 조회
- 태그, 요일, 시간 등 다양한 필터링 옵션

| 메소드 | 경로     | 설명                      |
| ------ | -------- | ------------------------- |
| POST   | /studies | 스터디 생성 (로그인 필요) |
| GET    | /studies | 전체 스터디 조회          |

### 스터디 참가 관리

- 스터디 참가 신청
- 스터디 개설자의 참가 신청 수락/거절
- 참가자 목록 조회

| 메소드 | 경로                              | 설명             |
| ------ | --------------------------------- | ---------------- |
| POST   | /studies/:studyId/apply           | 스터디 참가 신청 |
| PATCH  | /studies/:studyId/approve/:userId | 참가자 수락      |
| PATCH  | /studies/:studyId/reject/:userId  | 참가자 거절      |
| GET    | /studies/:studyId/members         | 참가자 목록 조회 |

## 데이터 모델

### User

- 사용자 정보 (이메일, 비밀번호, 이름 등)
- 관심 분야
- 가능한 요일

### Study

- 스터디 기본 정보 (제목, 설명, 태그 등)
- 스터디 일정 (요일, 시간)
- 최대 참가자 수

### StudyMember

- 스터디 참가 정보
- 참가 상태 (PENDING, ACCEPTED, REJECTED)

## 테스트

단위 테스트 실행:

```bash
pnpm test
```

E2E 테스트 실행:

```bash
pnpm test:e2e
```
