/**
 * @param {number[][]} grid
 * @return {number}
 */
  function solution(i,j1,j2,r,c,grid,dp){
        if(j1<0 || j1>=r || j2>=r || j2<0)return -1e9;

        if(i===c-1){
            if(j1==j2)return grid[i][j1];
            else return grid[i][j1]+grid[i][j2];
        }
        
        if(dp[i][j1][j2]!==-1)return dp[i][j1][j2];

        let maxi=Number.MIN_SAFE_INTEGER;
        for(let di=-1;di<=1;di++){
            for(let dj=-1;dj<=1;dj++){
                let ans;
                if(j1===j2){
                    ans=grid[i][j1]+solution(i+1,j1+di,j2+dj,r,c,grid,dp);
                }else{
                ans=grid[i][j1]+grid[i][j2]+solution(i+1,j1+di,j2+dj,r,c,grid,dp);
                }
                maxi=Math.max(maxi,ans);
            }
        }
        dp[i][j1][j2]=maxi;
        return maxi;
    }
    
var cherryPickup = function(grid) {
    let c=grid.length,r=grid[0].length;
    const dp = new Array(c).fill(null).map(() =>
    new Array(r).fill(null).map(() =>
      new Array(r).fill(-1)
    )
   );
    let res = solution(0,0,r-1,r,c,grid,dp);
    return res;
}