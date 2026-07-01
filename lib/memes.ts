export type NewMbReply = { keyword: string; lines: string[] };

export const starters = [
  '감독님 연애도 전술입니까?',
  '회사에서 억까 당했습니다',
  '공격 왜 안 하나요?',
  '퇴사해도 될까요?',
  '오늘 경기 졌는데요?',
  '로또 번호 알려주세요',
  '책임은 누가 집니까?',
  '소개팅 망했습니다'
];

export const fallbackReplies: NewMbReply[] = [
  { keyword: 'Reset', lines: ['오늘 경기는 졌습니다.', '하지만 리그는 끝나지 않았습니다.', '다음 경기 준비하세요.'] },
  { keyword: 'Forward', lines: ['뒤를 볼 시간이 있으면', '앞으로 한 발 더 가세요.', '그게 국룰입니다.'] },
  { keyword: 'Accountability', lines: ['상황은 여러 가지였습니다.', '그래도 책임은 감독이 집니다.', '핑계는 라커룸에 두고 오세요.'] },
  { keyword: 'Review', lines: ['화내도 판정은 안 바뀝니다.', '다음 플레이가 더 중요합니다.', 'VAR보다 멘탈입니다.'] },
  { keyword: 'Recover', lines: ['한 번의 퇴장은', '시즌 종료가 아닙니다.', '다시 몸 풀고 들어가세요.'] },
  { keyword: 'Impossible', lines: ['그걸 알면', '감독 안 하고', '로또 삽니다.'] },
  { keyword: 'Discipline', lines: ['싸우라는 건 경기하라는 뜻입니다.', '심판이랑 싸우라는 게 아닙니다.', '흥분하면 집에 갑니다.'] },
  { keyword: 'GOAT', lines: ['폼은 미쳤다고 되는 게 아닙니다.', '매일 뛰어야 레전드가 됩니다.', '억까는 실력으로 닫습니다.'] }
];

export function localReply(question: string): NewMbReply {
  const q = question.toLowerCase();
  if (q.includes('책임') || q.includes('남탓') || q.includes('핑계')) return fallbackReplies[2];
  if (q.includes('로또')) return fallbackReplies[5];
  if (q.includes('var') || q.includes('심판')) return fallbackReplies[3];
  if (q.includes('퇴장') || q.includes('싸')) return fallbackReplies[6];
  if (q.includes('연애') || q.includes('헤어') || q.includes('소개팅')) return fallbackReplies[4];
  const idx = Math.abs([...question].reduce((a, c) => a + c.charCodeAt(0), 0)) % fallbackReplies.length;
  return fallbackReplies[idx];
}

export function formatReply(reply: NewMbReply) { return `${reply.keyword}\n\n${reply.lines.join('\n')}`; }
