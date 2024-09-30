﻿using System;
using System.Collections.Generic;

namespace ServicesEcommerce.Server.Models;

public partial class SubService
{
    public int SubServiceId { get; set; }

    public string? SubServiceName { get; set; }

    public string? SubServiceDescription { get; set; }

    public string? SubServiceImage { get; set; }

    public int ServiceId { get; set; }

    public virtual Service Service { get; set; } = null!;

    public virtual ICollection<ServiceSubscription> ServiceSubscriptions { get; set; } = new List<ServiceSubscription>();
}
