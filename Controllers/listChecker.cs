using System;
using System.Collections.Generic;

namespace Git_clone.Controllers
{
    public class ListChecker
    {
        public List<Tuple<string, int, DateTime>> PeopleList { get; set; }
        public ListChecker()
        {
            PeopleList = new List<Tuple<string, int, DateTime>>();
        }
        public void CheckVerification()
        {
            while (true)
            {
                if (PeopleList.Count > 0)
                {
                    if (DateTime.Now >= PeopleList[0].Item3)
                    {
                        PeopleList.RemoveAt(0);
                    }
                }
                System.Threading.Thread.Sleep(6000);
            }
        }
    }
}
